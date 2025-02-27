let users = [
  { name: "Kiss Éva", age: 28, email: "eva@example.com", avatar: "https://i.pravatar.cc/250?img=1" },
  { name: "Nagy Anna", age: 34, email: "anna@example.com", avatar: "https://i.pravatar.cc/250?img=2" },
  { name: "Szabó Gábor", age: 41, email: "gabor@example.com", avatar: "https://i.pravatar.cc/250?img=3" },
  { name: "Tóth Péter", age: 25, email: "peter@example.com", avatar: "https://i.pravatar.cc/250?img=4" },
  { name: "Varga László", age: 39, email: "laszlo@example.com", avatar: "https://i.pravatar.cc/250?img=6" },
  { name: "Molnár Júlia", age: 31, email: "julia@example.com", avatar: "https://i.pravatar.cc/250?img=5" },
  { name: "Balogh István", age: 45, email: "istvan@example.com", avatar: "https://i.pravatar.cc/250?img=7" },
  { name: "Kovács Zsolt", age: 29, email: "zsolt@example.com", avatar: "https://i.pravatar.cc/250?img=8" },
  { name: "Horváth Bea", age: 36, email: "bea@example.com", avatar: "https://i.pravatar.cc/250?img=9" }
  ];
  function renderProfiles(arr){
      document.querySelector(".profiles-container").innerHTML = ""
      arr.forEach(({name, age, email, avatar})=>{
          document.querySelector(".profiles-container").innerHTML += `
          <div class="card">
              <img src="${avatar}" alt="">
              <h2>${name}</h2>
              <p>${age}</p>
              <p>${email}</p>
              <button type="button" popovertarget="mypopover-${name}">Profil szerkesztése</button>
          </div>

          <div class="popover_container" id="mypopover-${name}" popover>
            <img class="popover_img" src="${avatar}" alt="">

            <label for="name">Your name</label>
            <input  type="text" name="" id="${name}" value="${name}">
            <label for="email">Your email</label>
            <input  type="text" name="" id="${email}" value="${email}">
            <label for="age">Age</label>
            <input  type="text" name="" id="${age}" value="${age}">
            <label for="bio">BIO</label>
            <input  type="text" name="" id="bioid">
            <button type="button" onclick="renderCard(users)">Save Changes</button>
          </div>
          `
          
      });
  }
  function renderCard(arr){
      arr.forEach(({name, age, email})=>{
      console.log(users);
      users.name=document.getElementById(`${name}`).value
      users.age=document.getElementById(`${age}`).value
      users.email=document.getElementById(`${email}`).value
      console.log(users);
    })
    renderProfiles(users)
  }
  renderProfiles(users)
