window.addEventListener("load",function() {


    var submitBtn = document.getElementById("submit");
    submitBtn.addEventListener("click", onSubmitForm);

    function onSubmitForm(evt) {
        var errors = 0;

        var storyText = document.getElementById("textbox").value;
        var header = document.getElementById("head1").value;
        var shorthead1 =document.getElementById("shortheadline1").value;
        var author1 = document.getElementById("author11").value;
        var place1 = document.getElementById("place12").value;




        if (storyText === "") {
            errors++;
            console.log("need a valid text entry");
            textAreaError.innerHTML = "Please enter a valid Article Entry";
            document.getElementById("textbox").style.borderColor = "#fa4b57";
        }
        else {
            console.log("Story text is not empty");

            textAreaError.innerHTML = "Article Okay :D";

            document.getElementById("textbox").style.borderColor = "#64b135";
        }

        if (header === "") {
            errors++;
            console.log("Enter a valid header");

            header1Error.innerHTML = "Please enter a valid Headline";

            document.getElementById("head1").style.borderColor = "#fa4b57";

        }
        else {
            //console//
            console.log("headline field is not empty");

            //messageInfo//
            header1Error.innerHTML = "Headline Okay :D";

            //Input Box
            document.getElementById("head1").style.borderColor = "#64b135"; //Input Border | Success//


        }
        if (shorthead1 === "") {
            errors++;
            console.log("Enter a valid short headline");

            shortheader1Error.innerHTML = "Please enter a valid Short Headline";

            document.getElementById("shortheadline1").style.borderColor = "#fa4b57";

        }
        else {
            //console//
            console.log("Short Headline field is not empty");

            //messageInfo//
            shortheader1Error.innerHTML = "Short Headline Okay :D";

            //Input Box
            document.getElementById("shortheadline1").style.borderColor = "#64b135"; //Input Border | Success//


        }
        if (author1 === "") {
            errors++;
            console.log("Enter a valid author");

            author1Error.innerHTML = "Please enter a valid Author";

            document.getElementById("author11").style.borderColor = "#fa4b57";

        }
        else {
            //console//
            console.log("Author field is not empty");

            //messageInfo//
            author1Error.innerHTML = "Author Okay :D";

            //Input Box
            document.getElementById("author11").style.borderColor = "#64b135"; //Input Border | Success//


        }
        if (place1 === "") {
            errors++;
            console.log("Enter a valid place");

            place1Error.innerHTML = "Please enter a valid Place";

            document.getElementById("place12").style.borderColor = "#fa4b57";

        }
        else {
            //console//
            console.log("place  field is not empty");

            //messageInfo//
            place1Error.innerHTML = "Place Okay :D";

            //Input Box
            document.getElementById("place12").style.borderColor = "#64b135"; //Input Border | Success//


        }
         if (errors >0) {
             evt.preventDefault();
         }
            console.log("Done")


    }
})
/*when declaring variables, use var .
* = assigns it to a value
* ===checks if something is true*/
