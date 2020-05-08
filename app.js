document.querySelector('#load').addEventListener('click',loadPosts);


function loadPosts()
{
     const xhr = new XMLHttpRequest();

     xhr.open('GET','https://jsonplaceholder.typicode.com/posts',true);

     xhr.onload= function(){
          if(this.status==200)
          {
               const response= JSON.parse(this.responseText);
               console.log(response);

               let output="";

          response.forEach(function(post){
               output+=`<h3>${post.title}</h3>`;
          })
          document.querySelector('#result').innerHTML=output;

          }
     }
     xhr.send();
}