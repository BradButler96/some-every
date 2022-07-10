describe ('Calculating the monthly rate correctly', function(){
    it('5% interest', function() {
        document.getElementById("loan-amount").value = 100000;
        document.getElementById("loan-years").value = 10;
        document.getElementById("loan-rate").value = 5;
        calculateMonthlyPayment();
        expect(calculateMonthlyPayment()).toEqual('1060.66');
    })

    it('0% interest', function() {
        document.getElementById("loan-amount").value = 120000;
        document.getElementById("loan-years").value = 10;
        document.getElementById("loan-rate").value = 0;
        calculateMonthlyPayment();
        expect(calculateMonthlyPayment()).toEqual('1000.00');
    })

});

describe ('Decimal count', function(){
    it("should return a result with 2 decimal places", function() {
        document.getElementById("loan-amount").value = 100000;
        document.getElementById("loan-years").value = 10;
        document.getElementById("loan-rate").value = 5;
        let strPayment = calculateMonthlyPayment();
        let split = strPayment.split('.');
        expect(split[1].length).toEqual(2);
    })
});
  
afterEach(function() {
    document.getElementById("loan-amount").value = 0;
    document.getElementById("loan-years").value = 0;
    document.getElementById("loan-rate").value = 0;
});