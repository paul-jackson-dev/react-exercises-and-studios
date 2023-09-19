export default function BookList() {
   let pageTitle = "Great Books";
   let book1 = "https://www.saddlepointsystems.com/images/sample-books/tape-binding-master-category.jpg";
   let book2 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgb5guTeYyjioUWlek27kI0ebQeo9WTmk-cgucnPdW&s";
   let book3 = "https://images.squarespace-cdn.com/content/v1/58d26ed2e6f2e10bb3d09660/1572848630688-3W7YP4CF7ZFQUKVDJAC5/30+swatchbook.jpg";

   return (
      <div>
         <h3>{pageTitle}</h3>
         <img src={book1} alt="here!" />
         <img src={book2} alt="here!" />
         <img src={book3} alt="here!" />
      </div>      
   );
}