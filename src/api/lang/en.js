export const en = {

    header: {

        // Invoices
        invoices: "Invoices",
        addInvoice: "Add Invoice",
        editInvoice: "Edit Invoice",

        // Estimates
        estimates: "Estimates",
        addEstimate: "Add Estimate",
        editEstimate: "Edit Estimate",

        // Templates
        template: "Select a Template",

        // Customers
        customers: "Customers",
        addCustomer: "Add Customer",
        editCustomer: "Edit Customer",

        selectCurrency: "Select Currency",
        billingAddress: "Billing Address",
        shippingAddress: "Shipping Address",

        country: "Select Country",
        state: "Select State",
        city: "Select City",

        // Payments
        payments: "Payments",
        addPayment: "Add Payment",
        editPayment: "Edit Payment",


        // Expenses
        expenses: "Expenses",
        addExpense: "Add Expense",
        editExpense: "Edit Expense",

        // More
        more: "More",
        expenseCategory: "Expense Categories",
        addCategory: "Add Category",
        editCategory: "Edit Category",

        // Setting
        settings: "Settings",
        notifications: "Notification",
        setting: {
            company: "Company Information",
            account: "Account Settings",
            preferences: "Preferences",
            LanguageAndCurrency: "Language & Currency",
            endpoint: 'API Endpoint'
        },

        // Taxes
        taxes: "Tax Types",
        addTaxes: "Add Tax",
        editTaxes: "Edit Tax",

        // Item
        addItem: "Add Item",
        editItem: "Edit Item",
        items: "Items",

        // Report
        reports: "Reports",
        salesReport: "Sales Report",
        profitAndLossReport: "Profit & Loss Report",
        expensesReport: "Expenses Report",
        taxesReport: "Taxes Report",

        // Filter
        filter: "Filters",

        back: "Back",
    },

    tabNavigation: {
        invoices: "Invoices",
        customers: "Customers",
        payments: "Payments",
        expenses: "Expenses",
        more: "More",
    },

    invoices: {

        title: 'Select Invoice',

        tabs: {
            DUE: "Due",
            DRAFT: "Draft",
            ALL: "ALL"
        },

        invoiceDate: 'Invoice Date',
        dueDate: 'Due Date',
        discount: 'DISCOUNT',
        invoiceNumber: "Invoice Number",
        referenceNumber: "Reference Number",
        template: "Template",
        templatePlaceholder: "Select or Add a new Template",
        customer: "Customer",
        customerPlaceholder: "Select or Add new Customer",
        items: "Items",
        unit: "Unit",
        addItem: "Add Item",
        notes: "Notes",
        notePlaceholder: "Additional notes visible on Invoice",
        taxPlaceholder: "+ Add Tax",
        subtotal: "SUBTOTAL",
        totalAmount: "TOTAL AMOUNT",
        status: "Status",
        statusPlaceholder: "Select a Status",
        paidStatus: "Paid Status",
        paidStatusPlaceholder: "Select a Paid Status",
        fromDate: "From Date",
        toDate: "To Date",

        alert: {
            removeDescription: "You will not be able to recover this Invoice",
            paymentAttachedTitle: "Action Failed",
            paymentAttachedDescription: "Cannot delete an invoice with an existing payment.",
            draftTitle: "Save changes?"
        },

        empty: {
            due: {
                title: "You have no due invoices",
                description: "This section will contain the list of due invoices.",
            },
            draft: {
                title: "You have no draft invoices",
                description: "This section will contain the list of draft invoices.",
            },
            all: {
                title: "You haven't created any invoices",
            },

            title: "No invoices yet!",
            description: "This section will contain the list of invoices.",
            buttonTitle: "Add New Invoice"
        },

        actions: {
            downloadPdf: 'Download PDF',
            sendInvoice: 'Send Invoice',
            editInvoice: 'Edit Invoice',
            delete: 'Delete',
            recordPayment: "Record Payment",
            markAsSent: "Mark As Sent"
        }
    },

    customers: {
        displayName: "Display name",
        contactName: "Primary Contact Name",
        email: "Email",
        name: "Name",
        phone: "Phone",
        website: "Website",
        currency: "Currency",
        billingAddress: "Billing Address",
        shippingAddress: "Shipping Address",
        enablePortal: "Enable Portal",
        password: "Password",

        filterDisplayName: "Display Name",
        filterContactName: "Contact Name",

        alertEmailAlreadyInUse: "Email already in use",
        alertDescription: "You will not be able to recover this Customer",

        address: {
            name: "Name",
            country: "Country",
            state: "State",
            city: "City",
            address: "Address",
            street1: "Street1",
            street2: "Street2",
            phone: "Phone",
            zipcode: "Zip Code",
            sameAs: "Copy from Billing Address"
        },

        removeCustomer: "Delete",

        empty: {
            title: "No customers yet!",
            description: "This section will contain the list of customers.",
            buttonTitle: "Add New Customer",

            country: { title: "No Country Available" },
            state: { title: "No State Available" },
            city: { title: "No City Available" }
        },

        title: 'Select a Customer',
        placeholder: 'Select Customer',
    },

    payments: {

        date: "Payment Date",
        number: "Payment Number",
        customer: "Customer",
        customerPlaceholder: "Select or Add new Customer",
        mode: "Payment Mode",
        modePlaceholder: "Select Payment Mode",
        amount: "Amount",
        notes: "Notes",
        notesPlaceholder: "Additional notes",
        invoice: "Invoice",
        invoicePlaceholder: "Select Invoice",

        alertAmount: "The payment entered is more than the total amount due for this invoice.",
        alertDescription: "You will not be able to recover this Payment",

        removePayment: "Delete",

        empty: {
            title: "No payments yet!",
            description: 'This section will contain the list of payments.',
            buttonTitle: 'Add New Payment',
        },
    },

    expenses: {
        receipt: "Receipt",
        date: "Expense Date",
        fromDate: "From Date",
        toDate: "To Date",
        amount: "Amount",
        category: "Category",
        categoryPlaceholder: "Select Category",
        notes: "Notes",
        notesPlaceholder: "Additional notes",
        viewReceipt: "View Receipt",

        alertDescription: "You will not be able to recover this Expense",
        removeExpense: "Delete",

        noCategories: "No categories yet!",

        empty: {
            title: "No expenses yet!",
            description: 'This section will contain the list of expenses.',
            buttonTitle: 'Add New Expense',
        },
    },

    items: {

        title: 'Select Item',

        name: "Item Name",
        description: "Description (optional)",
        quantity: "Quantity",
        price: "Price",
        subTotal: "SUBTOTAL",
        discountType: "Discount Type",
        discount: "Discount",
        finalDiscount: "DISCOUNT",
        finalAmount: "AMOUNT",
        taxes: "Taxes",
        selectTax: "Select or Add New Taxes",
        unit: "Unit",
        unitPlaceholder: "Select unit",

        alertDescription: "You will not be able to recover this Item",
        lessAmount: "Total Amount should't less than 0",

        alreadyAttachTitle: "Action Failed",
        alreadyAttachDescription: "Cannot delete an item which is already in use",

        empty: {
            title: "No items yet!",
            description: 'This section will contain the list of items.',
            buttonTitle: 'Add New Items',
        },
    },

    more: {
        estimate: "Estimates",
        items: "Items",
        reports: "Reports",
        settings: "Settings",
        logout: "Logout",
    },

    categories: {

        title: "Category Name",
        description: "Description",

        alertDescription: "You will not be able to recover this Category",
        alreadyUsed: "Category already in use",

        empty: {
            title: "No categories yet!",
            description: "This section will contain the list of categories.",
            buttonTitle: "Add New Category"
        }
    },

    settings: {
        accountSettings: "Account settings",
        companyInformation: "Company Info",
        preference: "Preferences",
        LanguageAndCurrency: "Language & Currency",
        notification: "Notifications",
        taxes: "Tax Types",
        expenseCategory: "Expense Categories",

        endpoint: "API Endpoint",

        company: {
            name: "Company Name",
            email: "Email",
            phone: "Phone",
            address: "Address",
            street1: "Street1",
            street2: "Street2",
            zipcode: "Zip Code",
            website: "Website",
            logo: "Company Logo"
        },

        account: {
            name: "Name",
            email: "Email",
            password: "Password",
            confirmPassword: "Confirm Password",
            version: "Version"
        },

        notifications: {
            send: "Send Notifications To",
            invoiceViewed: "Invoice Viewed",
            invoiceViewedUpdated: "Notification setting updated successfully",
            invoiceViewedDescription: "When your customer views the invoice link sent via email.",

            estimateViewed: "Estimate Viewed",
            estimateViewedDescription: "When your customer views the estimate link sent via email.",
            estimateViewedUpdated: "Notification setting updated successfully",
        },

        preferences: {
            currency: "Currency",
            currencyPlaceholder: "Select Currency",
            language: "Language",
            languagePlaceholder: "Select Language",
            timeZone: "Time Zone",
            timeZonePlaceholder: "Select Time Zone",
            dateFormat: "Date Format",
            dateFormatPlaceholder: "Select Date Format",
            fiscalYear: "Financial Year",
            fiscalYearPlaceholder: "Select Financial Year",
            discountSetting: "Discount Setting",
            discountPerItem: "Discount Per Item",
            discountPerItemPlaceholder: "Enable this if you want to add Discount to individual invoice items. By default, Discount are added directly to the invoice.",
            taxPerItem: "Tax Per Item",
            taxPerItemPlaceholder: "Enable this if you want to add Tax to individual invoice items. By default, Tax are added directly to the invoice.",

            settingUpdate: "Setting updated successfully"
        }
    },

    login: {
        email: "Enter Your Email",
        password: "Enter Your Password",
        invalid: "Invalid Credentials"
    },
    logout: {
        confirmation: "Are you sure you want to logout?",
        title: "Logout"
    },
    forgot: {
        emailLabel: "Enter your email and we will send you reset password link",
        emailPlaceholder: "Enter Your Email",
        emailSendTitle: "Check Your Email",
        emailSendDescription: " A Password reset link has been sent to your email, Please follow the instructions on the email to create a new password",
        emailSendError: "Email could not be sent to this email address.",
    },

    lostInternet: {
        title: "Connection Lost",
        description: "Please check your mobile or Wifi settings to verify your internet connectivity and then try again."
    },

    updateApp: {
        title: "App Version Expired!",
        description: "This version of the app is out of date. Please install the latest update to keep using Crater."
    },

    endpoint: {
        endpointURL: 'Endpoint URL',
        endpointDesc: 'Above URL will be used to connect with your self-hosted installation of crater.',
        urlPlaceHolder: 'Eg: https://craterapp.com',
        alertInvalidUrl: "Invalid URL",
    },

    estimates: {

        tabs: {
            SENT: "Sent",
            DRAFT: "Draft",
            ALL: "All"
        },

        estimateDate: 'Estimate Date',
        expiryDate: 'Expiry Date',
        discount: 'DISCOUNT',
        estimateNumber: "Estimate Number",
        template: "Template",
        templatePlaceholder: "Select or Add a new Template",
        customer: "Customer",
        customerPlaceholder: "Select or Add new Customer",
        items: "Items",
        unit: "Unit",
        taxPlaceholder: "+ Add Tax",
        addItem: "Add Item",
        notes: "Notes",
        notePlaceholder: "Additional notes visible on estimate",

        fromDate: "From Date",
        toDate: "To Date",
        status: "Status",
        statusPlaceholder: "Select a Status",

        subtotal: "SUBTOTAL",
        tax: "TAX",
        totalAmount: "TOTAL AMOUNT",

        alert: {
            convertToInvoiceDescription: "Are you sure you want to convert this Estimate into an Invoice?",
            removeDescription: "You will not be able to recover this Estimate",
            lessAmount: "Total Amount should't less than 0",
            draftTitle: "Save changes?",
        },

        empty: {
            sent: {
                title: "You have no sent estimates",
                description: "This section will contain the list of sent estimates.",
            },
            draft: {
                title: "You have no draft estimates",
                description: "This section will contain the list of draft estimates.",
            },
            all: {
                title: "You haven't created any estimates",
                description: "This section will contain the list of estimates.",
            },

            buttonTitle: "Add New Estimate"
        },

        actions: {
            downloadPdf: 'Download PDF',
            sendEstimate: 'Send Estimate',
            editEstimate: 'Edit Estimate',
            delete: 'Delete',
            convertToInvoice: 'Convert To Invoice',
            markAsSent: 'Mark As Sent',
            markAsAccepted: 'Mark As Accepted',
            markAsRejected: 'Mark As Rejected',
        }
    },

    currencies: {
        title: 'Select Currency',
        empty: {
            title: "No currencies yet!",
        }
    },

    languages: {
        title: 'Select Language',
        empty: {
            title: "No languages yet!",
            description: "This section will contain the list of Languages.",
        }
    },

    timeZones: {
        title: 'Select TimeZone',
        empty: {
            title: "No TimeZones yet!",
            description: "This section will contain the list of Timezones.",
        }
    },

    dateFormats: {
        title: 'Select Date Format',
        empty: {
            title: "No date formats yet!",
            description: "This section will contain the list of Date Formats.",
        }
    },

    fiscalYears: {
        title: 'Select financial year',
        empty: {
            title: "No Financial Years yet!",
            description: "This section will contain the list of Financial Years.",
        }
    },

    reports: {
        sales: 'Sales',
        profitAndLoss: 'Profit & Loss',
        expenses: 'Expenses',
        taxes: 'Taxes',
        dateRange: 'Select Date Range',
        fromDate: 'From Date',
        toDate: 'To Date',
        reportType: 'Report Type',

        byCustomer: 'By Customer',
        byItem: 'By Item',

        today: 'Today',
        thisWeek: 'This Week',
        thisMonth: 'This Month',
        thisQuarter: 'This Quarter',
        thisYear: 'This Year',
        currentFiscalQuarter: 'Current Fiscal Quarter',
        currentFiscalYear: 'Current Fiscal Year',
        previousWeek: 'Previous Week',
        previousMonth: 'Previous Month',
        previousQuarter: 'Previous Quarter',
        previousYear: 'Previous Year',
        previousFiscalQuarter: 'Previous Fiscal Quarter',
        previousFiscalYear: 'Previous Fiscal Year',
        custom: 'Custom',

    },

    taxes: {

        title: 'Taxes',

        type: "Tax Name",
        description: "Description",
        percentage: "Tax Percentage",
        compoundTax: "Compound Tax",

        alertDescription: "You will not be able to recover this Tax",
        alreadyUsed: "Tax already in use",

        empty: {
            title: "No Tax Types yet!",
            description: 'This section will contain the list of Tax Types.',
            buttonTitle: 'Add Tax Type',
        },
    },


    filePicker: {
        file: "Click here to choose a file",
        permission: "Sorry, we need camera roll permissions to make this work!"
    },

    alert: {
        title: "Are you sure?",
        action: {
            discard: "Discard",
            saveAsDraft: "Save As Draft",
            emailNotExist: "User email does not exist"
        }
    },

    button: {

        remove: "Remove",
        save: "Save",
        edit: "Edit",
        retry: "Retry",
        done: "Done",
        skip: "Skip",
        clear: "Clear",

        // Invoices
        viewPdf: "View PDF",

        // Auth
        singIn: "Sign in",
        singInGoogle: "Sign in with google",
        forget: "Forget Password?",

        update: "Update",
        updateCapital: "UPDATE",
        chooseTemplate: "Choose Template",

        // Reports
        generateReport: " Generate Report",

        recoveryEmail: "Send reset link",
        recoveryEmailAgain: "Send Again",
    },

    filter: {
        empty: {
            filterTitle: "No Results found"
        }
    },

    search: {
        title: "Search",
        noResult: 'No results for "{{search}}"',
        noSearchResult: 'No results for',
    },

    validation: {
        Customer: "Customer",
        Invoice: "Invoice",
        required: "Required field is empty",
        field: "{{hint}} field is required",
        choose: "Choose at least one item",
        email: "Please enter a valid email address",
        passwordCompare: "Passwords do not match",
        minimumNumber: "must be greater than 0",
        maximumNumber: "must be less than {{maxNumber}}",
        numeric: "must be numeric",
        moreThanDue: "{{hint}} Should not be more than Due Amount.",
        url: "Invalid url (eg: https://craterapp.com)"
    },

};