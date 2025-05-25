///
//Snippet For Testing The Triangle Micro App
///


//Function for creating a triangle via giving value to each side
function TriangleCreator(side1, side2, side3) {
    document.querySelector("#side1").value = side1
    document.querySelector("#side2").value = side2
    document.querySelector("#side3").value = side3
}

//function for clicking on Identify Triangle Type Button
function ClickIdentify() {
    document.querySelector("#identify-triangle-action").click()
}

//Test1: Test for a Scalene Triangle Type
function Test_Scalene_Triangle() {
    TriangleCreator(5,6,3)
    ClickIdentify()
    actualResult = document.querySelector("div.answer #triangle-type").innerText
    console.assert(actualResult=="Scalene", "Expected Result is Scalene, Actual Result is " +actualResult)
}

//Test2: Test for a Isosceles Triangle Type
function Test_Isosceles_Triangle() {
    TriangleCreator(5,5,3)
    ClickIdentify()
    actualResult = document.querySelector("div.answer #triangle-type").innerText
    console.assert(actualResult=="Isosceles", "Expected Result is Isosceles, Actual Result is " +actualResult)
}

//Test3: Test for a Equilateral Triangle Type
function Test_Equilateral_Triangle() {
    TriangleCreator(5,5,5)
    ClickIdentify()
    actualResult = document.querySelector("div.answer #triangle-type").innerText
    console.assert(actualResult=="Equilateral", "Expected Result is Equilateral, Actual Result is " +actualResult)
}

//Test4: Test for the Edgecase that one side should smaller than the difference of other sides
function Test_Edgecase_OneSideTooSmall() {
    TriangleCreator(5,6,1)
    ClickIdentify()
    actualResult = document.querySelector("div.answer #triangle-type").innerText
    console.assert(actualResult=="Error: Not a Triangle", "Expected Result is Error: Not a Triangle, Actual Result is " +actualResult)
}

//Test5: Test for the Edgecase that one side should more than the summary of other sides
function Test_Edgecase_OneSideTooBig() {
    TriangleCreator(7,6,1)
    ClickIdentify()
    actualResult = document.querySelector("div.answer #triangle-type").innerText
    console.assert(actualResult=="Error: Not a Triangle", "Expected Result is Error: Not a Triangle, Actual Result is " +actualResult)
}

//Test6: Test for the Edgecase that all the sides are equal and zero
function Test_Edgecase_AllZero() {
    TriangleCreator(0,0,0)
    ClickIdentify()
    actualResult = document.querySelector("div.answer #triangle-type").innerText
    console.assert(actualResult=="Error: Not a Triangle", "Expected Result is Error: Not a Triangle, Actual Result is " +actualResult)
}

//Test7: Test for the Edgecase that giving big values for a check, and right after small values
function Test_Edgecase_SmallValueAfterBigValues() {
    TriangleCreator(10000,10000,10000)
    ClickIdentify()
    TriangleCreator(5,6,3)
    ClickIdentify()
    actualResult = document.querySelector("div.answer #triangle-type").innerText
    console.assert(actualResult=="Scalene", "Expected Result is Scalene, Actual Result is " +actualResult)
}

//Test8: Negative Tests with negative values
function Test_Negative_NegativeValues() {
    TriangleCreator(-5,-5,-5)
    ClickIdentify()
    actualResult = document.querySelector("div.answer #triangle-type").innerText
    console.assert(actualResult=="Error: Not a Triangle", "Expected Result is Error: Not a Triangle, Actual Result is " +actualResult)
}

//Test9: Negative Tests with character value at side 1
function Test_Negative_CharacterSide1() {
    TriangleCreator("five",6,7)
    ClickIdentify()
    actualResult = document.querySelector("div.answer #triangle-type").innerText
    console.assert(actualResult=="Error: Side 1 is not a Number", "Expected Result is Error: Side 1 is not a Number, Actual Result is " +actualResult)
}

//Test10: Negative Tests with character value at side 2
function Test_Negative_CharacterSide2() {
    TriangleCreator(5,"six",7)
    ClickIdentify()
    actualResult = document.querySelector("div.answer #triangle-type").innerText
    console.assert(actualResult=="Error: Side 2 is not a Number", "Expected Result is Error: Side 2 is not a Number, Actual Result is " +actualResult)
}

//Test11: Negative Tests with character value at side 3
function Test_Negative_CharacterSide3(){
    TriangleCreator(5,6,"seven")
    ClickIdentify()
    actualResult = document.querySelector("div.answer #triangle-type").innerText
    console.assert(actualResult=="Error: Side 3 is not a Number", "Expected Result is Error: Side 3 is not a Number, Actual Result is " +actualResult)
}

//Test12: Negative Tests with negative value at side 1 and character value at side 3
function Test_Negative_NegativeValueAndCharacter() {
    TriangleCreator(-5,6,"seven")
    ClickIdentify()
    actualResult = document.querySelector("div.answer #triangle-type").innerText
    console.assert(actualResult=="Error: Side 3 is not a Number", "Expected Result is Error: Side 3 is not a Number, Actual Result is " +actualResult)
}

//Test13: Test with the floating numbers on sides
function Test_with_Floats() {
    TriangleCreator(0.5,0.6,0.7)
    ClickIdentify()
    actualResult = document.querySelector("div.answer #triangle-type").innerText
    console.assert(actualResult=="Scalene", "Expected Result is Scalene, Actual Result is " +actualResult)

}

//Test14: Negative Tests with no value at side 1
function Test_Negative_Side1Missing() {
    TriangleCreator("",6,7)
    ClickIdentify()
    actualResult = document.querySelector("div.answer #triangle-type").innerText
    console.assert(actualResult=="Error: Side 1 is missing", "Expected Result is Error: Side 1 is missing, Actual Result is " +actualResult)
}

//Test15: Negative Tests with no value at side 2
function Test_Negative_Side2Missing() {
    TriangleCreator(5,"",7)
    ClickIdentify()
    actualResult = document.querySelector("div.answer #triangle-type").innerText
    console.assert(actualResult=="Error: Side 2 is missing", "Expected Result is Error: Side 2 is missing, Actual Result is " +actualResult)
}

//Test16: Negative Tests with no value at side 3
function Test_Negative_Side3Missing() {
    TriangleCreator(5,6,"")
    ClickIdentify()
    actualResult = document.querySelector("div.answer #triangle-type").innerText
    console.assert(actualResult=="Error: Side 3 is missing", "Expected Result is Error: Side 3 is missing, Actual Result is " +actualResult)
}

Test_Scalene_Triangle()
Test_Isosceles_Triangle()
Test_Equilateral_Triangle()
Test_with_Floats()
Test_Edgecase_OneSideTooSmall()
Test_Edgecase_OneSideTooBig()
Test_Edgecase_AllZero()
Test_Edgecase_SmallValueAfterBigValues()
Test_Negative_NegativeValues()
Test_Negative_CharacterSide1()
Test_Negative_CharacterSide2()
Test_Negative_CharacterSide3()
Test_Negative_NegativeValueAndCharacter()
Test_Negative_Side1Missing()
Test_Negative_Side2Missing()
Test_Negative_Side3Missing()