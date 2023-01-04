const posts = [
 {title: 'Post One', body: 'This is post one'},
 {title: 'Post Two', body: 'This is post two'}
];

function getPosts(){
 setTimeout(()=>{
  let output = '';
  posts.forEach((post, index)=>{
   output += `<li>${post.title}</li>`;
  });
  document.body.innerHTML = output;
 }, 1000);
}

function createPost(post){
 return new Promise((resolve,reject) => {
  setTimeout(() => {
   posts.push(post);
   const error = false;

   if(!error ){
    resolve();
   }
   else{
    reject('error: something went wrong');
   }
 },2000);
 
});
}

function deletePost(){
 return new Promise((resolve, reject) => {
  setTimeout( () => {
   if(posts.length>0){
    const lastElement = posts.pop();
    resolve(lastElement);
   }
   else{
    reject("Array is empty now");
   }

  },1000);

 });
}

function updateLastUserActivityTime(){
  return new Promise((resolve, reject) =>{
    setTimeout(()=>{
      posts.lastActivityTime = new Date().getTime();
      resolve(); 
    },1000);
  });
}

createPost({title:'Post three', body:'This is post three'})
createPost({title: 'Post Fourth', body:'This is post fourth'})
 .then(() =>{
  getPosts()
  deletePost().then(()=>{
    getPosts();
    deletePost().then(() => {
      getPosts();
      deletePost().then(()=>{
        getPosts();
        deletePost().then(()=> {
          getPosts();
          deletePost().then(()=>{})
          .catch((err)=>{
            console.log("Inside catch block", err)
          })
        }).catch((err)=>{})
        
      }).catch((err)=>{})
    }).catch((err)=>{})
  }).catch((err)=>{})

 })
 .catch(err => console.log(err));

//  const promise1 = Promise.resolve('Hello World');
//  const promise2 = 10;
//  const promise3 = new Promise((resolve, reject)=>{
//   setTimeout(resolve, 2000, 'Goodbye')
//  });
 
//  Promise.all([promise1, promise2, promise3]).then(values =>
//   console.log(values));
 