import styles from "./Description.module.css";
import React from 'react';

class Description extends React.Component {

    render() {
        return (
        <div> 
            <div>
                <h1>How to Make Homemade Glazed Doughnuts</h1>
                <p>
                    Making homemade glazed doughnuts is easier than you think, but requires a little patience. Ready in about 2.5 hours, these taste like doughnuts from your favorite bakery, but they’re made in the comfort of your own home. For doughnut success, follow my step-by-step photos, helpful success tips, and video tutorial. Using this same doughnut dough, you can create other flavored frosted doughnuts too!
                </p>
            </div>
            <RecipeAuthor />
        </div>
    );}
};

function RecipeAuthor(){

    const authorLink = "https://sallysbakingaddiction.com/how-to-make-homemade-glazed-doughnuts/";
    const authorPhoto = "https://sallysbakingaddiction.com/wp-content/uploads/2023/08/headshot-sally-green-shirt-300x300.jpg";
    const authorName = "Sally McKenney";
    return (
        <div className = {styles.recipeAuthorBlock}>
        <img src={authorPhoto} alt = "Homemade Glazed Doughnuts" className={styles.imageUpdates} />
        <div>
            <h3>{authorName}</h3>
            <a href={authorLink}>Sally's Baking Recipes</a> 
        </div>
        </div>
    );


}

export default RecipeDescription;