fetch("jobs_data.json")
  .then(response => response.json())
  .then(data => {
    let jobList = document.getElementById("job-listings");
    let jobs = "";
    data.forEach(job => {
      jobs += `<li>
        <h3>${job.title}</h3>
        <p>Company: ${job.company}</p>
        <p>Location: ${job.location}</p>
        <p>Salary: ${job.salary}</p>
        <p>Description: ${job.description}</p>
        <a href="${job.apply_url}">Apply Now</a>
      </li>`;
    });
    jobList.innerHTML = jobs;
  });

let form = document.querySelector("form");
form.addEventListener("submit", event => {
  event.preventDefault();
  let keywords = document.getElementById("keywords").value;
  // You can add your code here to filter the job data with the given keywords
  fetch("jobs_data.json")
    .then(response => response.json())
    .then(data => {
    let jobList = document.getElementById("job-listings");
    let jobs = "";
    data.forEach(job => {
      if(job.title.toLowerCase().includes(keywords.toLowerCase()) || job.description.toLowerCase().includes(keywords.toLowerCase())){
        jobs += `<li>
          <h3>${job.title}</h3>
          <p>Company: ${job.company}</p>
          <p>Location: ${job.location}</p>
          <p>Salary: ${job.salary}</p>
          <p>Description: ${job.description}</p>
          <a href="${job.apply_url}">Apply Now</a>
        </li>`;
      }
    });
    jobList.innerHTML = jobs;
  });
});