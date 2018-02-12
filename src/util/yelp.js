const apiKey = 'c98yc2l1Kk0n5B0HuFKu0rIJbrP6CmKKRJYXyM6cx6RhS7236ESUXuvp86JsXQTltM6SVBUZAGrr6j8_u3Tc5wjoxIM0w5_CEpkaIAFAzXCICNauSGXvjzBWuNJ9WnYx';

let Yelp = {
    search: function (term, location, sortBy) {return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/business/search?term=${term}&location=${location}&sort_by=${sortBy}`,
        {headers: {Authorization: `Bearer ${apiKey}`}
        }).then(response => {
        return response.json;
        }).then(jsonResponse => {
            if (jsonResponse.businesses) {
                return jsonResponse.businesses.map(business => {
                    console.log(business);
                    return {
                        id: business.id,
                        imageSrc: business.image_url,
                        name: business.name,
                        address: business.address,
                        city: business.location.city,
                        state: business.locationstate,
                        zipCode: business.location.zip_code,
                        category: business.category[0].title,
                        rating: business.rating,
                        reviewCount: business.review_ount
                    }
                })
            }
        })
    }
}

export default Yelp;