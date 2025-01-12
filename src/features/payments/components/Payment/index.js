// @flow

import React from 'react';
import { View, Alert } from 'react-native';
import { Field, change } from 'redux-form';
import moment from 'moment';
import styles from './styles';
import {
    InputField,
    CtButton,
    DefaultLayout,
    DatePickerField,
    SelectPickerField,
    SelectField,
} from '../../../../components';
import { ROUTES } from '../../../../navigation/routes';
import { DATE_FORMAT } from '../../../../api/consts/core';
import { goBack, MOUNT, UNMOUNT } from '../../../../navigation/actions';
import { PAYMENT_ADD, PAYMENT_MODE, PAYMENT_EDIT, PAYMENT_FORM, PAYMENT_ACTIONS, ACTIONS_VALUE } from '../../constants';
import Lng from '../../../../api/lang/i18n';
import { IMAGES } from '../../../../config';
import { CUSTOMER_ADD } from '../../../customers/constants';
import { INVOICES_STATUS_BG_COLOR, INVOICES_STATUS_TEXT_COLOR } from '../../../invoices/constants';
import { MAX_LENGTH, alertMe } from '../../../../api/global';

let paymentRefs = {}

type IProps = {
    navigation: Object,
    customers: Object,
    getCreatePayment: Function,
    getEditPayment: Function,
    getUnpaidInvoices: Function,
    createPayment: Function,
    editPayment: Function,
    handleSubmit: Function,
    type: String,
    language: String,
    paymentLoading: Boolean,
    initPaymentLoading: Boolean,
    getUnpaidInvoicesLoading: Boolean,
    getCustomers: Function,
}

let editPaymentData = [
    "payment_date",
    "payment_number",
    "user_id",
    "invoice_id",
    "payment_mode",
    "amount",
    "notes"
]

export class Payment extends React.Component<IProps> {
    constructor(props) {
        super(props);
        this.state = {
            invoices: [],
            selectedInvoice: '',
            selectedCustomer: '',
            selectedPaymentMode: '',
            isLoading: true,
        };
    }

    componentDidMount() {
        const {
            getCreatePayment,
            navigation,
            getEditPayment,
            type,
            hasRecordPayment,
        } = this.props;


        if (type === PAYMENT_EDIT) {

            let id = navigation.getParam('paymentId', null)
            this.setFormField('id', id)

            getEditPayment({
                id,
                onResult: ({ payment, invoices }) => {

                    let { user_id, payment_mode, invoice_id, invoice, amount } = payment

                    editPaymentData.map((field) => {
                        this.setFormField(field, payment[field])
                    })

                    invoice_id && invoice && this.setFormField('due',
                        (Number(amount) + Number(invoice.due_amount))
                    )

                    this.setState({
                        selectedCustomer: user_id ? payment.user : '',
                        selectedInvoice: invoice_id ? payment.invoice.invoice_number : '',
                        selectedPaymentMode: payment_mode,
                    })

                    if (user_id)
                        this.setState({ invoices })

                    this.setState({ isLoading: false })
                }
            });
        }
        else {
            getCreatePayment({
                onResult: (val) => {
                    this.setFormField('payment_number', val.nextPaymentNumber)
                    this.setFormField('payment_date', moment())

                    hasRecordPayment ?
                        this.SetRecordPaymentField() :
                        this.setState({ isLoading: false })
                }
            });
        }

        goBack(MOUNT, navigation)
    }

    componentWillUnmount() {
        goBack(UNMOUNT)
    }


    SetRecordPaymentField = () => {
        const {
            invoice: {
                user,
                user_id,
                due_amount,
                invoice_number,
                id
            },
            getUnpaidInvoices,
        } = this.props

        this.setFormField('user_id', user_id)
        this.setFormField('amount', due_amount)
        this.setFormField('due', due_amount)
        this.setFormField('invoice_id', id)

        this.setState({
            selectedCustomer: user,
            selectedInvoice: invoice_number
        })

        getUnpaidInvoices({
            id: user_id,
            onResult: (invoices) => {
                invoices.length !== 0 ?
                    this.setState({
                        invoices,
                        isLoading: false
                    })
                    : this.setState({ isLoading: false })
            }
        })
    }

    setFormField = (field, value) => {
        this.props.dispatch(change(PAYMENT_FORM, field, value));

        if (field === 'payment_mode') {
            this.setState({
                selectedPaymentMode: value
            })
        }
    };

    onCustomerSelect = (customer) => {
        const { getUnpaidInvoices } = this.props
        let { id } = customer
        this.setFormField('user_id', id)
        this.setState({ selectedCustomer: customer })

        getUnpaidInvoices({
            id,
            onResult: (invoices) => {
                if (invoices.length !== 0) {

                    this.setState({
                        invoices,
                        selectedInvoice: ''
                    })
                    this.setFormField('invoice_id', '')
                }
                else {
                    this.setState({
                        invoices: [],
                        selectedInvoice: ''
                    })
                    this.setFormField('invoice_id', '')
                }
            }
        })
    }

    onPaymentSubmit = (values) => {

        const {
            type,
            createPayment,
            editPayment,
            navigation,
            hasRecordPayment,
            language
        } = this.props

        type === PAYMENT_ADD ?
            createPayment({
                params: values,
                navigation,
                hasRecordPayment,
                onResult: (val) => {
                    val === 'invalid_amount' &&
                        alertMe({ title: Lng.t("payments.alertAmount", { locale: language }) })
                }
            })
            :
            editPayment({
                id: navigation.getParam('paymentId'),
                params: values,
                navigation
            })
    };


    getInvoicesList = (items) => {
        let invoicesList = []
        if (typeof items !== 'undefined' && items.length != 0) {

            const { selectedCustomer } = this.state
            const { name = '', currency = null } = selectedCustomer

            invoicesList = items.map((item) => {
                const {
                    invoice_number,
                    status,
                    formattedDueDate,
                    due_amount,
                } = item;

                return {
                    title: name,
                    subtitle: {
                        title: invoice_number,
                        label: status,
                        labelBgColor: INVOICES_STATUS_BG_COLOR[status],
                        labelTextColor: INVOICES_STATUS_TEXT_COLOR[status],
                    },
                    amount: due_amount,
                    currency,
                    rightSubtitle: formattedDueDate,
                    fullItem: item,
                };
            });

        }

        return invoicesList
    }

    removePayment = () => {
        const { removePayment, navigation, language } = this.props

        Alert.alert(
            Lng.t("alert.title", { locale: language }),
            Lng.t("payments.alertDescription", { locale: language }),
            [
                {
                    text: 'OK',
                    onPress: () => removePayment({
                        id: navigation.getParam('paymentId', null),
                        navigation
                    })
                },
                {
                    text: 'Cancel',
                    onPress: () => { },
                    style: 'cancel',
                },
            ],
            { cancelable: false }
        );
    }

    onOptionSelect = (action) => {

        if (action == ACTIONS_VALUE.REMOVE)
            this.removePayment()

    }

    BOTTOM_ACTION = (handleSubmit) => {

        const {
            language,
            paymentLoading
        } = this.props

        let buttonTitle = Lng.t("button.save", { locale: language })

        return (
            <View style={styles.submitButton}>
                <CtButton
                    onPress={handleSubmit(this.onPaymentSubmit)}
                    btnTitle={buttonTitle}
                    loading={paymentLoading}
                />
            </View>
        )
    }

    render() {
        const {
            navigation,
            handleSubmit,
            customers,
            language,
            initPaymentLoading,
            getUnpaidInvoicesLoading,
            type,
            getCustomers,
            formValues: { due = '', amount = 0 },
            submitFailed = false,
        } = this.props;

        const {
            selectedInvoice,
            selectedCustomer,
            selectedPaymentMode,
            invoices,
            isLoading
        } = this.state

        let drownDownProps = type === PAYMENT_EDIT ? {
            options: PAYMENT_ACTIONS(Lng, language),
            onSelect: this.onOptionSelect,
            cancelButtonIndex: 1,
            destructiveButtonIndex: 2
        } : null


        return (
            <DefaultLayout
                headerProps={{
                    leftIconPress: () => navigation.goBack(null),
                    title: type === PAYMENT_EDIT ?
                        Lng.t("header.editPayment", { locale: language }) :
                        Lng.t("header.addPayment", { locale: language }),
                    placement: "center",
                    rightIcon: type !== PAYMENT_EDIT ? "save" : null,
                    rightIconProps: {
                        solid: true,
                    },
                    rightIconPress: handleSubmit(this.onPaymentSubmit),
                }}
                bottomAction={this.BOTTOM_ACTION(handleSubmit)}
                loadingProps={{
                    is: isLoading || initPaymentLoading
                }}
                dropdownProps={drownDownProps}
            >

                <View style={styles.bodyContainer}>

                    <View style={styles.numberDateFieldContainer}>
                        <View style={styles.numberDateField}>
                            <Field
                                name="payment_date"
                                component={DatePickerField}
                                dateTimeFormat={DATE_FORMAT}
                                label={Lng.t("payments.date", { locale: language })}
                                icon={'calendar-alt'}
                                onChangeCallback={(val) => {
                                    this.setFormField('payment_date', val)
                                }}
                                isRequired
                            />
                        </View>

                        <View style={styles.numberDateField}>
                            <Field
                                name="payment_number"
                                component={InputField}
                                hint={Lng.t("payments.number", { locale: language })}
                                inputProps={{
                                    returnKeyType: 'next',
                                    autoCapitalize: 'none',
                                    autoCorrect: true,
                                }}
                                editable={false}
                                inputContainerStyle={styles.paymentNumberField}
                                isRequired
                            />
                        </View>
                    </View>

                    <Field
                        name="user_id"
                        apiSearch
                        hasPagination
                        getItems={getCustomers}
                        items={customers}
                        displayName="name"
                        component={SelectField}
                        label={Lng.t("payments.customer", { locale: language })}
                        icon={'user'}
                        placeholder={selectedCustomer ? selectedCustomer.name : Lng.t("payments.customerPlaceholder", { locale: language })}
                        navigation={navigation}
                        compareField="id"
                        onSelect={(item) => {
                            this.onCustomerSelect(item)
                            this.setFormField('due', '')
                        }}
                        rightIconPress={
                            () => navigation.navigate(ROUTES.CUSTOMER, {
                                type: CUSTOMER_ADD,
                                onSelect: (val) => {
                                    this.onCustomerSelect(val)
                                    this.setFormField('due', '')
                                }
                            })
                        }
                        headerProps={{
                            title: Lng.t("customers.title", { locale: language }),
                        }}
                        listViewProps={{
                            hasAvatar: true,
                        }}
                        emptyContentProps={{
                            contentType: "customers",
                            image: IMAGES.EMPTY_CUSTOMERS,
                        }}
                        isRequired
                        isEditable={type === PAYMENT_ADD}
                        fakeInputProps={{
                            disabled: type !== PAYMENT_ADD
                        }}
                    />

                    <Field
                        name="amount"
                        component={InputField}
                        leftIcon={'dollar-sign'}
                        hint={Lng.t("payments.amount", { locale: language })}
                        inputProps={{
                            returnKeyType: 'next',
                            autoCorrect: true,
                            keyboardType: 'numeric',
                        }}
                        isCurrencyInput
                        refLinkFn={(ref) => {
                            paymentRefs.amount = ref;
                        }}
                        isRequired
                    />

                    <Field
                        name="invoice_id"
                        items={this.getInvoicesList(invoices)}
                        displayName="invoice_number"
                        component={SelectField}
                        label={Lng.t("payments.invoice", { locale: language })}
                        icon={'file-invoice'}
                        placeholder={selectedInvoice ? selectedInvoice : Lng.t("payments.invoicePlaceholder", { locale: language })}
                        navigation={navigation}
                        fakeInputProps={{
                            loading: getUnpaidInvoicesLoading
                        }}
                        isInternalSearch
                        searchFields={['invoice_number', 'due_amount']}
                        compareField="id"
                        onSearch={
                            ({ searchItems, hasAll }) => {
                                this.setState({ customerList: hasAll ? customers : searchItems })
                            }
                        }
                        onSelect={({ id, due_amount }) => {
                            this.setFormField('invoice_id', id)
                            this.setFormField('amount', due_amount)
                            this.setFormField('due', due_amount)
                            paymentRefs.amount.focus();
                        }}
                        headerProps={{
                            title: Lng.t("invoices.title", { locale: language }),
                            rightIconPress: null
                        }}
                        listViewProps={{
                        }}
                        emptyContentProps={{
                            contentType: "invoices",
                            image: IMAGES.EMPTY_INVOICES,
                        }}
                        containerStyle={
                            due && submitFailed && amount > due &&
                            { marginTop: 22 }
                        }
                        isEditable={type === PAYMENT_ADD}
                        fakeInputProps={{
                            disabled: type !== PAYMENT_ADD
                        }}
                    />

                    <Field
                        name="payment_mode"
                        component={SelectPickerField}
                        label={Lng.t("payments.mode", { locale: language })}
                        fieldIcon='align-center'
                        items={PAYMENT_MODE}
                        selectedItem={selectedPaymentMode}
                        onChangeCallback={(val) => {
                            this.setFormField('payment_mode', val)
                        }}
                        onDonePress={() => paymentRefs.notes.focus()}
                        defaultPickerOptions={{
                            label: Lng.t("payments.modePlaceholder", { locale: language }),
                            value: '',
                        }}
                        refLinkFn={(ref) => {
                            paymentRefs.mode = ref;
                        }}
                        containerStyle={styles.selectPicker}
                    />

                    <Field
                        name="notes"
                        component={InputField}
                        hint={Lng.t("payments.notes", { locale: language })}
                        inputProps={{
                            returnKeyType: 'next',
                            autoCapitalize: 'none',
                            placeholder: Lng.t("payments.notesPlaceholder", { locale: language }),
                            autoCorrect: true,
                            multiline: true,
                            maxLength: MAX_LENGTH
                        }}
                        height={80}
                        autoCorrect={true}
                        refLinkFn={(ref) => {
                            paymentRefs.notes = ref;
                        }}
                    />

                </View>
            </DefaultLayout >
        );
    }
}

