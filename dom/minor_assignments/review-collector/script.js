const reviewContainer = document.getElementById("review-container");
const submit = document.getElementById("submit");
const allReviewsContainer = document.getElementById("right");

export const firstReviewStar = document.getElementById("one-star");
export const secondReviewStar = document.getElementById("two-star");
export const thirdReviewStar = document.getElementById("three-star");
export const fourthReviewStar = document.getElementById("four-star");
export const fifthReviewStar = document.getElementById("five-star");

let ratings = 0;


const fillFirstReviewStar = () => {
  firstReviewStar.src = firstReviewStar.src.replace("emptyStar", "filledStar");
}

const fillSecondReviewStar = () => {
  secondReviewStar.src = secondReviewStar.src.replace("emptyStar", "filledStar");
}

const fillThirdReviewStar = () => {
  thirdReviewStar.src = thirdReviewStar.src.replace("emptyStar", "filledStar");
}

const fillFourthReviewStar = () => {
  fourthReviewStar.src = fourthReviewStar.src.replace("emptyStar", "filledStar");
}

const fillFifthReviewStar = () => {
  fifthReviewStar.src = fifthReviewStar.src.replace("emptyStar", "filledStar");
}

const emptyFirstReviewStar = () => {
  firstReviewStar.src = firstReviewStar.src.replace("filledStar", "emptyStar");
}

const emptySecondReviewStar = () => {
  secondReviewStar.src = secondReviewStar.src.replace("filledStar", "emptyStar");
}

const emptyThirdReviewStar = () => {
  thirdReviewStar.src = thirdReviewStar.src.replace("filledStar", "emptyStar");
}

const emptyFourthReviewStar = () => {
  fourthReviewStar.src = fourthReviewStar.src.replace("filledStar", "emptyStar");
}

const emptyFifthReviewStar = () => {
  fifthReviewStar.src = fifthReviewStar.src.replace("filledStar", "emptyStar");
}


firstReviewStar.addEventListener("click", () => {
  fillFirstReviewStar();
  emptySecondReviewStar();
  emptyThirdReviewStar();
  emptyFourthReviewStar();
  emptyFifthReviewStar();
  ratings = 1;
});

secondReviewStar.addEventListener("click", () => {
  fillFirstReviewStar();
  fillSecondReviewStar();
  emptyThirdReviewStar();
  emptyFourthReviewStar();
  emptyFifthReviewStar();
  ratings = 2;
});

thirdReviewStar.addEventListener("click", () => {
  fillFirstReviewStar();
  fillSecondReviewStar();
  fillThirdReviewStar();
  emptyFourthReviewStar();
  emptyFifthReviewStar();
  ratings = 3;
});

fourthReviewStar.addEventListener("click", () => {
  fillFirstReviewStar();
  fillSecondReviewStar();
  fillThirdReviewStar();
  fillFourthReviewStar();
  emptyFifthReviewStar();
  ratings = 4;
});

fifthReviewStar.addEventListener("click", () => {
  fillFirstReviewStar();
  fillSecondReviewStar();
  fillThirdReviewStar();
  fillFourthReviewStar();
  fillFifthReviewStar();
  ratings = 5;
});


submit.addEventListener("click", () => {
  if (reviewContainer.value && ratings > 0) {
    const container = document.createElement("div");

    const reviewText = document.createElement("div");
    reviewText.id = 'text';
    reviewText.innerText = reviewContainer.value;

    const reviewRatings = document.createElement("div");
    reviewRatings.innerText = ratings;
    reviewRatings.innerHTML = `<p style="margin-right: 5px;">${ratings}</p> <img src="https://sa-web-h1a.flixcart.com/mosaic/ss/filledStar.svg" height:"2" />`;

    container.appendChild(reviewText);
    container.appendChild(reviewRatings);

    allReviewsContainer.insertBefore(
      container,
      allReviewsContainer.children[0]
    );

    reviewContainer.value = "";

    emptyFirstReviewStar();
    emptySecondReviewStar();
    emptyThirdReviewStar();
    emptyFourthReviewStar();
    emptyFifthReviewStar();

    ratings = 0;
  } 
  else {
    alert(
      `fill some text for review 
      select a star rating`
    );
  }
});