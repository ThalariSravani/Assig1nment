document.getElementById('intSumButton').addEventListener('click', function() {
    const int1 = parseInt(document.getElementById('int1').value);
    const int2 = parseInt(document.getElementById('int2').value);
    const intSum = int1 + int2;
    document.getElementById('intSumResult').innerText = 'Sum of integers: ' + intSum;
});

document.getElementById('doubleSumButton').addEventListener('click', function() {
    const double1 = parseFloat(document.getElementById('double1').value);
    const double2 = parseFloat(document.getElementById('double2').value);
    const doubleSum = double1 + double2;
    document.getElementById('doubleSumResult').innerText = 'Sum of doubles: ' + doubleSum.toFixed(1);
});
