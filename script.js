let initLike = 100;
let intiDisLike = 20;

let likeCount = initLike;
let disLikeCount = intiDisLike;

const likeBtn = document.getElementById("likeBtn");

const disLikeBtn = document.getElementById("disLikeBtn");

const commentBox = document.getElementById("commentBox");

const Submit = document.getElementById("Submit");

const Reset = document.getElementById("Reset");

likeBtn.innerText = "👍" + likeCount;
disLikeBtn.innerText = "👎" + disLikeCount;

likeBtn.addEventListener("click", () => {
  likeBtn.innerText = "👍" + (likeCount += 1);

  disableLike();
  setLikeCookie();
});

disLikeBtn.addEventListener("click", () => {
  disLikeBtn.innerText = "👎" + (disLikeCount += 1);
  disableLike();
  setLikeCookie();
});

const commetnList = document.getElementById("commetnList");

Submit.addEventListener("click", () => {
  const pElement = document.createElement("p");
  pElement.innerText = commentBox.value.trim();

  commetnList.appendChild(pElement);
  commentBox.value = "";

  disableSubmit();
  setSubmitCookie();
});

Reset.addEventListener("click", () => {
  commentBox.value = "";
});

/////////
function setLikeCookie() {
  document.cookie = "like=true; ;max-age=" + 60;
}

window.onload = () => {
  if (document.cookie && document.cookie.indexOf("like") > -1) {
    disableLike();
  }
};

function disableLike() {
  likeBtn.disabled = true;
  disLikeBtn.disabled = true;
}

/////////////////

function setSubmitCookie() {
  document.cookie = "submit=true; ;max-age=" + 60;
}

window.onload = () => {
  if (document.cookie && document.cookie.indexOf("submit") > -1) {
    disableLike();
  }
};

function disableSubmit() {
  Submit.disabled = true;
}
