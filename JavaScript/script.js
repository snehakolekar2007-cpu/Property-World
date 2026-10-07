/* =====================================================
   PROPERTY WORLD - MAIN JAVASCRIPT
===================================================== */


/* =====================================================
   1. SEARCH PROPERTY - BUY PAGE
===================================================== */

function searchProperty() {

    const searchInput =
        document.getElementById("locationSearch");

    if (!searchInput) {
        return;
    }


    const searchText =
        searchInput.value.trim().toLowerCase();


    /* Empty search */

    if (searchText === "") {

        alert("Please enter a location.");

        return;
    }


    const propertyCards =
        document.querySelectorAll(".home-card");


    let found = false;


    propertyCards.forEach(function(card) {

        const locationElement =
            card.querySelector(".location");


        if (!locationElement) {
            return;
        }


        const propertyLocation =
            locationElement.textContent
            .trim()
            .toLowerCase();


        if (propertyLocation.includes(searchText)) {

            card.style.display = "";

            found = true;

        } else {

            card.style.display = "none";

        }

    });


    /* Scroll to properties */

    const propertySection =
        document.getElementById("featured-properties");


    if (propertySection) {

        propertySection.scrollIntoView({
            behavior: "smooth"
        });

    }


    /* No property found */

    if (!found) {

        alert(
            "No properties found for: " +
            searchInput.value.trim()
        );

    }

}


/* =====================================================
   2. VIEW PROPERTY DETAILS
===================================================== */

function viewProperty(propertyName) {

    window.location.href =
        "property-details.html?property=" +
        encodeURIComponent(propertyName);

}


/* =====================================================
   3. BOOK VISIT FROM BUY PAGE
===================================================== */

function bookVisit(propertyName) {

    const visitorName =
        prompt("Enter your name:");


    /* Cancel */

    if (visitorName === null) {
        return;
    }


    /* Empty name */

    if (visitorName.trim() === "") {

        alert("Please enter your name.");

        return;

    }


    const phone =
        prompt("Enter your mobile number:");


    /* Cancel */

    if (phone === null) {
        return;
    }


    /* Mobile validation */

    if (!/^[0-9]{10}$/.test(phone.trim())) {

        alert(
            "Please enter a valid 10-digit mobile number."
        );

        return;

    }


    /* Success */

    alert(
        "VISIT REQUEST SUBMITTED!\n\n" +

        "Property: " +
        propertyName +

        "\nName: " +
        visitorName.trim() +

        "\nMobile: " +
        phone.trim() +

        "\n\nOur team will contact you soon."
    );

}


/* =====================================================
   4. LIKE PROPERTY
===================================================== */

function likeProperty(button) {

    if (button.innerHTML.trim() === "♡") {

        button.innerHTML = "♥";

        button.style.color = "#20573f";

        button.title =
            "Remove from favourites";


        alert(
            "Property added to your favourites!"
        );

    } else {

        button.innerHTML = "♡";

        button.style.color = "#222";

        button.title =
            "Add to favourites";


        alert(
            "Property removed from your favourites."
        );

    }

}


/* =====================================================
   5. SEARCH USING ENTER KEY - BUY PAGE
===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        const searchInput =
            document.getElementById("locationSearch");


        if (searchInput) {

            searchInput.addEventListener(
                "keydown",
                function(event) {

                    if (event.key === "Enter") {

                        searchProperty();

                    }

                }
            );

        }

    }
);


/* =====================================================
   6. HOME PAGE SEARCH
===================================================== */

function searchHome() {

    const location =
        document.getElementById("homeLocation").value;


    const propertyType =
        document.getElementById("homePropertyType").value;


    const budget =
        document.getElementById("homeBudget").value;


    const properties =
        document.querySelectorAll(".property-card");


    let found = false;


    properties.forEach(function(property) {

        const propertyLocation =
            property.dataset.location;


        const propertyTypeValue =
            property.dataset.type;


        const propertyBudget =
            property.dataset.budget;


        /*
           Check Location
           Check Property Type
           Check Budget
        */

        if (
            propertyLocation === location &&
            propertyTypeValue === propertyType &&
            propertyBudget === budget
        ) {

            property.style.display = "block";

            found = true;

        } else {

            property.style.display = "none";

        }

    });


    /* Scroll to Featured Properties */

    const propertySection =
        document.getElementById("popular-properties");


    if (propertySection) {

        propertySection.scrollIntoView({
            behavior: "smooth"
        });

    }

}