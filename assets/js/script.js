//******************* Bootstrap code popover & tooltip *******************//

const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);

const popoverTriggerList = document.querySelectorAll(
  '[data-bs-toggle="popover"]'
);
const popoverList = [...popoverTriggerList].map(
  (popoverTriggerEl) => new bootstrap.Popover(popoverTriggerEl)
);

document.addEventListener("click", function (event) {
  var popoverTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="popover"]')
  );
  var clickedInsidePopover = false;

  popoverTriggerList.forEach(function (popoverTrigger) {
    var popover = bootstrap.Popover.getInstance(popoverTrigger);
    if (popover._popover && popover._popover.contains(event.target)) {
      clickedInsidePopover = true;
    }
  });

  if (!clickedInsidePopover) {
    popoverTriggerList.forEach(function (popoverTrigger) {
      var popover = bootstrap.Popover.getInstance(popoverTrigger);
      if (popover) {
        popover.hide();
      }
    });
  }
});
//******************* End code Bootstrap *******************//
//******************* Start my code for CV *******************//

//******************* progress Creator *******************//
let skillNameInput = document.getElementById("skill");
let skillScoreInput = document.getElementById("skillscore");
let addToScore = document.querySelector(".addtoskill");
let parentProgress = document.querySelector(".parent-progress");
var flagProgress = 0;

addToScore.addEventListener("click", () => {
  let skillName = skillNameInput.value;
  let skillScore = skillScoreInput.value;
  let progressDiv = document.createElement("div");
  progressDiv.className = "tag-progress col-md-6 mx-auto";
  let pOfProgress = document.createElement("p");
  let spanOfProgress = document.createElement("span");
  pOfProgress.innerHTML = skillName;
  spanOfProgress.innerHTML = skillScore + "%";
  pOfProgress.appendChild(spanOfProgress);
  progressDiv.appendChild(pOfProgress);
  let progressBox = document.createElement("progress");
  if (!(flagProgress % 2 == 0)) {
    progressBox.className = "progress progress--copyright";
  } else {
    progressBox.className = "progress progress--illustration";
  }
  progressBox.setAttribute("max", 100);
  progressBox.setAttribute("value", skillScore);
  progressDiv.appendChild(progressBox);
  parentProgress.appendChild(progressDiv);

  flagProgress += 1;
  clearProgress();
});

function clearProgress() {
  skillNameInput.value = "";
  skillScoreInput.value = 0;
}
//***************** End progress Creator *****************//
//******************* project Creator *******************//
let projectNameInput = document.querySelector("#projectname");
let projectLinkInput = document.querySelector("#projectlink");
let checkComplatedInputs = document.querySelectorAll(
  'input[name="checkprojectstatus"]'
);
let addToProject = document.querySelector(".addtoproject");
let parentProject = document.querySelector(".parent-project");
var flagProgect = true;

addToProject.addEventListener("click", () => {
  let projectName = projectNameInput.value.trim();
  let projectLink = projectLinkInput.value.trim();
  let valueChecked;
  let checkComplated;
  checkComplatedInputs.forEach((input) => {
    if (input.checked) {
      valueChecked = input.value;
      checkComplated = true;
    }
  });
  if (!checkComplated) {
    checkComplated = false;
  }
  if (projectName && projectLink && checkComplated) {
    let projectDiv = document.createElement("div");
    projectDiv.className = "box-project col-12 col-md-6 col-lg-4 my-2 py-5";
    projectDiv.innerHTML = projectName;
    let spanProject01 = document.createElement("span");
    spanProject01.innerHTML = valueChecked;
    if (!(valueChecked == "کامل شد")) {
      spanProject01.className = "badge rounded-pill text-bg-danger";
    } else {
      spanProject01.className = "badge rounded-pill text-bg-success";
    }
    projectDiv.appendChild(spanProject01);
    let spanProject02 = document.createElement("span");
    spanProject02.innerHTML = `
      <span class="link-to-project position-absolute">
          <a href="${projectLink}" class="text-purple">
            <i class="fa fa-reply" aria-hidden="true"></i>
            مشاهده پروژه </a>
      </span>
    `;
    projectDiv.appendChild(spanProject02);
    parentProject.appendChild(projectDiv);
    clearProgect();
  }
});
function clearProgect() {
  projectNameInput.value = "";
  projectLinkInput.value = "";
}
//******************* End project Creator *******************//
//********************* Input SaveData *********************//
let sendInputValue = document.querySelector("#send-input-value");
let deleteInputData = document.querySelector("#remove-data");
let getInputValue;

deleteInputData.addEventListener("click", () => {
  localStorage.clear();
  location.reload();
});

document.addEventListener("DOMContentLoaded", loadInputData());
function loadInputData() {
  let storedInputValues = localStorage.getItem("inputValues");
  if (storedInputValues !== null) {
    let inputValues = JSON.parse(storedInputValues);

    /*   get document   */
    let setName = document.querySelectorAll("#set_neme");
    let setFamily = document.querySelector("#set_family");
    let setJob = document.querySelectorAll("#set_job");
    let setCountryCity = document.querySelector("#set_countrycity");
    let setPhoneNumber = document.querySelectorAll("#set_phonenumber");
    let setBirthday = document.querySelectorAll("#set_birthday");
    let setCity = document.querySelectorAll("#set_city");
    let setActivity = document.querySelectorAll("#set_activity");
    let setEducation = document.querySelector("#set_education");
    let setGrade = document.querySelector("#set_grade");
    let setMaritalStatus = document.querySelector("#set_maritalstatus");
    let setFixednumber = document.querySelector("#set_fixednumber");
    let setEmail = document.querySelector("#set_email");
    let setAddress = document.querySelector("#set_address");
    let getIconsElm = document.querySelectorAll(".get-icons-elm");
    /* let getImgProfile = document.querySelectorAll(".img-box"); */
    console.log(getIconsElm);
    /* End get document */

    /*   set document   */
    setCountryCity.innerHTML = inputValues[5] + " - " + inputValues[6];
    setEducation.innerHTML = inputValues[4];
    setGrade.innerHTML = inputValues[8];
    setMaritalStatus.innerHTML = inputValues[9];
    setFixednumber.innerHTML = inputValues[11];
    setEmail.innerHTML = inputValues[12];
    setAddress.innerHTML = inputValues[13];
    setFamily.innerHTML = inputValues[1];

    for (let i = 0; i <= 2; i++) {
      setName[i].innerHTML = inputValues[0] + " " + inputValues[1];
    }
    setBirthday[0].innerHTML = inputValues[7];

    for (let i = 0; i <= 1; i++) {
      setBirthday[i].innerHTML = inputValues[7];
      setActivity[i].innerHTML = inputValues[3];
      setCity[i].innerHTML = inputValues[6];
      setJob[i].innerHTML = inputValues[2];
      setPhoneNumber[i].innerHTML = inputValues[10];
    }

    getIconsElm.forEach((input) => {
      var z = 14;
      if (inputValues[z]) {
        input.href = inputValues[z];
      }
      z += 1;
    });

    /*  getImgProfile.forEach((input) => {
      input.src = inputValues[18];
    }); */

    /* End set document */
  }
}

sendInputValue.addEventListener("click", () => {
  getInputValue = document.querySelectorAll(".get-input-value");

  var filteredInput;
  let inputValues = [];
  getInputValue.forEach((input) => {
    filteredInput = input.value.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    console.log(filteredInput);

    inputValues.push(filteredInput);
  });

  localStorage.setItem("inputValues", JSON.stringify(inputValues));
  loadInputData();
});

//******************* End Input SaveData *******************//

//*********************************************************//
//*********************************************************//
//*********************************************************//
//************* ADD LocalStorage To project *****************//
//*********************************************************//
//*********************************************************//
//*********************************************************//
//******************* progress Creator *******************//
/* let skillNameInput = document.getElementById("skill");
let skillScoreInput = document.getElementById("skillscore");
let addToScore = document.querySelector(".addtoskill");
let parentProgress = document.querySelector(".parent-progress");
var flagProgress = 0;

addToScore.addEventListener("click", () => {
  let skillName = skillNameInput.value;
  let skillScore = skillScoreInput.value;
  let progressDiv = document.createElement("div");
  progressDiv.className = "tag-progress col-md-6 mx-auto";
  let pOfProgress = document.createElement("p");
  let spanOfProgress = document.createElement("span");
  pOfProgress.innerHTML = skillName;
  spanOfProgress.innerHTML = skillScore + "%";
  pOfProgress.appendChild(spanOfProgress);
  progressDiv.appendChild(pOfProgress);
  let progressBox = document.createElement("progress");
  if (!(flagProgress % 2 == 0)) {
    progressBox.className = "progress progress--copyright";
  } else {
    progressBox.className = "progress progress--illustration";
  }
  progressBox.setAttribute("max", 100);
  progressBox.setAttribute("value", skillScore);
  progressDiv.appendChild(progressBox);
  parentProgress.appendChild(progressDiv);

  flagProgress += 1;
  clearProgress();
});

function clearProgress() {
  skillNameInput.value = "";
  skillScoreInput.value = 0;
}
 */

//***************** End progress Creator *****************//
//******************* project Creator *******************//

/* let projectNameInput = document.querySelector("#projectname");
let projectLinkInput = document.querySelector("#projectlink");
let checkComplatedInputs = document.querySelectorAll(
  'input[name="checkprojectstatus"]'
);
let addToProject = document.querySelector(".addtoproject");
let parentProject = document.querySelector(".parent-project");
var flagProgect = true;

addToProject.addEventListener("click", () => {
  let projectName = projectNameInput.value.trim();
  let projectLink = projectLinkInput.value.trim();
  let valueChecked;
  let checkComplated;
  checkComplatedInputs.forEach((input) => {
    if (input.checked) {
      valueChecked = input.value;
      checkComplated = true;
    }
  });
  if (!checkComplated) {
    checkComplated = false;
  }
  if (projectName && projectLink && checkComplated) {
    let projectDiv = document.createElement("div");
    projectDiv.className = "box-project col-12 col-md-6 col-lg-4 my-2 py-5";
    projectDiv.innerHTML = projectName;
    let spanProject01 = document.createElement("span");
    spanProject01.innerHTML = valueChecked;
    if (!(valueChecked == "کامل شد")) {
      spanProject01.className = "badge rounded-pill text-bg-danger";
    } else {
      spanProject01.className = "badge rounded-pill text-bg-success";
    }
    projectDiv.appendChild(spanProject01);
    let spanProject02 = document.createElement("span");
    spanProject02.innerHTML = `
      <span class="link-to-project position-absolute">
          <a href="${projectLink}" class="text-purple">
            <i class="fa fa-reply" aria-hidden="true"></i>
            مشاهده پروژه </a>
      </span>
    `;
    projectDiv.appendChild(spanProject02);
    parentProject.appendChild(projectDiv);
    clearProgect();
    saveDataToLocalStorage();
  }
});

function clearProgect() {
  projectNameInput.value = "";
  projectLinkInput.value = "";
}

function saveDataToLocalStorage() {
  let skills = [];
  let projects = [];

  let skillElements = parentProgress.getElementsByClassName("tag-progress");
  for (let i = 0; i < skillElements.length; i++) {
    let skillName = skillElements[i].getElementsByTagName("p")[0].innerText;
    let skillScore = skillElements[i]
      .getElementsByTagName("progress")[0]
      .getAttribute("value");
    skills.push({ name: skillName, score: skillScore });
  }

  let projectElements = parentProject.getElementsByClassName("box-project");
  for (let i = 0; i < projectElements.length; i++) {
    let projectName = projectElements[i].innerText;
    let projectStatus = projectElements[i]
      .getElementsByClassName("badge")[0]
      .innerHTML.trim();
    let projectLink = projectElements[i]
      .getElementsByClassName("link-to-project")[0]
      .getElementsByTagName("a")[0]
      .getAttribute("href");
    projects.push({
      name: projectName,
      status: projectStatus,
      link: projectLink,
    });
  }

  localStorage.setItem("skills", JSON.stringify(skills));
  localStorage.setItem("projects", JSON.stringify(projects));
}

window.onload = function () {
  let skillsData = localStorage.getItem("skills");
  let projectsData = localStorage.getItem("projects");

  if (skillsData) {
    let skills = JSON.parse(skillsData);
    skills.forEach((skill) => {
      let progressDiv = document.createElement("div");
      progressDiv.className = "tag-progress col-md-6 mx-auto";
      let pOfProgress = document.createElement("p");
      let spanOfProgress = document.createElement("span");
      pOfProgress.innerHTML = skill.name;
      spanOfProgress.innerHTML = skill.score + "%";
      pOfProgress.appendChild(spanOfProgress);
      progressDiv.appendChild(pOfProgress);
      let progressBox = document.createElement("progress");
      if (!(flagProgress % 2 == 0)) {
        progressBox.className = "progress progress--copyright";
      } else {
        progressBox.className = "progress progress--illustration";
      }
      progressBox.setAttribute("max", 100);
      progressBox.setAttribute("value", skill.score);
      progressDiv.appendChild(progressBox);
      parentProgress.appendChild(progressDiv);

      flagProgress += 1;
    });
  }

  if (projectsData) {
    let projects = JSON.parse(projectsData);
    projects.forEach((project) => {
      let projectDiv = document.createElement("div");
      projectDiv.className = "box-project col-12 col-md-6 col-lg-4 my-2 py-5";
      projectDiv.innerHTML = project.name;
      let spanProject01 = document.createElement("span");
      spanProject01.innerHTML = project.status;
      if (!(project.status == "کامل شد")) {
        spanProject01.className = "badge rounded-pill text-bg-danger";
      } else {
        spanProject01.className = "badge rounded-pill text-bg-success";
      }
      projectDiv.appendChild(spanProject01);
      let spanProject02 = document.createElement("span");
      spanProject02.innerHTML = `
        <span class="link-to-project position-absolute">
            <a href="${project.link}" class="text-purple">
              <i class="fa fa-reply" aria-hidden="true"></i>
              مشاهده پروژه </a>
        </span>
      `;
      projectDiv.appendChild(spanProject02);
      parentProject.appendChild(projectDiv);
    });
  }
};
 */
