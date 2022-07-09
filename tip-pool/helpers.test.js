describe('sumPaymentTotal()', function() {
    it ('should verify billAmt, tipAmt, & tipPercent update after payment is submitted', function () {
        let billAmtInput = document.getElementById('billAmt');
        let tipAmtInput = document.getElementById('tipAmt'); 

        let billAmt = billAmtInput.value = '400';
        let tipAmt = tipAmtInput.value = '20';

        submitPaymentInfo();
        sumPaymentTotal();

        expect(sumPaymentTotal('billAmt')).toEqual(400);
        expect(sumPaymentTotal('tipAmt')).toEqual(20);
        expect(sumPaymentTotal('tipPercent')).toEqual(5);

        billAmt = billAmtInput.value = '300';
        tipAmt = tipAmtInput.value = '30';

        submitPaymentInfo();
        sumPaymentTotal();

        expect(sumPaymentTotal('billAmt')).toEqual(700);
        expect(sumPaymentTotal('tipAmt')).toEqual(50);
        expect(sumPaymentTotal('tipPercent')).toEqual(15);
    });

    afterEach(function() {
        document.getElementById('paymentTable').deleteRow(1);
        document.getElementById('paymentTable').deleteRow(1);
        allPayments = {};
        summaryTds[0].innerHTML = '';
        summaryTds[1].innerHTML = '';
        summaryTds[2].innerHTML = '';
    });
});
