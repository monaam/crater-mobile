import { StyleSheet } from 'react-native';
import { colors } from '../../../../styles/colors';
import { fonts } from '../../../../styles/fonts';
import { isIPhoneX } from '../../../../api/helper';

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.veryLightGray,
    },
    bodyContainer: {
        paddingHorizontal: 22,
        paddingVertical: 17,
    },
    selectPicker: {
        marginTop: 17,
    },
    numberDateFieldContainer: {
        flex: 1,
        flexDirection: 'row',
        marginHorizontal: -10,
    },
    numberDateField: {
        flex: 1,
        paddingHorizontal: 5,
        justifyContent: 'space-between',
    },
    paymentNumberField: {
        marginVertical: 0,
    },
    inBetweenSpace: {
        paddingHorizontal: 5
    },
    submitButton: {
        paddingHorizontal: 10,
    },
    multipleButton: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    btnContainerStyle: {
        marginHorizontal: 10,
    },
    flex: {
        flex: 1
    }
});