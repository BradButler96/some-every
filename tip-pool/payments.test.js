describe('createCurPayment()', function() {
    it('Should return an object containing billAmt, tipAmt, tipPercent', function () {
        createCurPayment()
        let billAmtInput = document.getElementById('billAmt');
        let tipAmtInput = document.getElementById('tipAmt'); 
        let billAmt = billAmtInput.value = '100';
        let tipAmt = tipAmtInput.value = '100';

        expect(createCurPayment()).toEqual({      
            billAmt: billAmt,
            tipAmt: tipAmt,
            tipPercent: 100
        });        
    });

    afterEach(function() {
        let billAmt = billAmtInput.value = '';
        let tipAmt = tipAmtInput.value = '';
    }); 
});

describe('appendPaymentTable()', function() {
    it('should measure addition of tr', function () {
        let billAmtInput = document.getElementById('billAmt');
        let tipAmtInput = document.getElementById('tipAmt'); 
        let billAmt = billAmtInput.value = '500';
        let tipAmt = tipAmtInput.value = '100';
        let curPayment = {     
            billAmt: billAmt,
            tipAmt: tipAmt,
            tipPercent: calculateTipPercent(billAmt, tipAmt)
        };
        appendPaymentTable(curPayment);
        expect(paymentTbody.childElementCount).toEqual(1);
        
        billAmt = billAmtInput.value = '100';
        tipAmt = tipAmtInput.value = '10';

        appendPaymentTable(curPayment);
        expect(paymentTbody.childElementCount).toEqual(2);

    });

    afterEach(function() {
        let billAmt = billAmtInput.value = '';
        let tipAmt = tipAmtInput.value = '';
        document.getElementById('paymentTable').deleteRow(1);
        document.getElementById('paymentTable').deleteRow(1);
    }); 
});



describe('updateSummary()', function() {
    it('should verify correct number of tds in each tr, and verify the correct value after payment info is submitted', function () {
        let summaryTds = document.querySelectorAll('#summaryTable tbody tr td');

        let billAmtInput = document.getElementById('billAmt');
        let tipAmtInput = document.getElementById('tipAmt'); 
        let billAmt = billAmtInput.value = '100';
        let tipAmt = tipAmtInput.value = '20';
        submitPaymentInfo()
        updateSummary()

        expect(summaryTds[0].innerHTML).toEqual('$100');
        expect(summaryTds[1].innerHTML).toEqual('$20');
        expect(summaryTds[2].innerHTML).toEqual('20%');
        expect(summaryTds.length).toEqual(3);


        billAmt = billAmtInput.value = '200';
        tipAmt = tipAmtInput.value = '20';

        submitPaymentInfo()
        updateSummary()
        expect(summaryTds[0].innerHTML).toEqual('$300');
        expect(summaryTds[1].innerHTML).toEqual('$40');
        expect(summaryTds[2].innerHTML).toEqual('15%');
    });

    afterEach(function() {
        summaryTds[0].innerHTML = '';
        summaryTds[1].innerHTML = '';
        summaryTds[2].innerHTML = '';
        allPayments = {};
        document.getElementById('paymentTable').deleteRow(1);
        document.getElementById('paymentTable').deleteRow(1);
    });
});

describe('submitPaymentInfo()', function() {
    it('should verify the addition of payment data to paymentTable upon submission', function () {
        let billAmtInput = document.getElementById('billAmt');
        let tipAmtInput = document.getElementById('tipAmt');
        let paymentTbody = document.querySelector('#paymentTable tbody');
        let billAmt = billAmtInput.value = 250;
        let tipAmt = tipAmtInput.value = 25;
        expect(paymentTbody.childElementCount).toEqual(0);
        submitPaymentInfo();
        expect(paymentTbody.childElementCount).toEqual(1);
    });

    afterEach(function() {
        summaryTds[0].innerHTML = '';
        summaryTds[1].innerHTML = '';
        summaryTds[2].innerHTML = '';
        allPayments = {};
        document.getElementById('paymentTable').deleteRow(1);
    });
});
