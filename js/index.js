

var firebaseConfig = {
          apiKey: "AIzaSyA3YltChWDcrQjZhgrv5O_df5VeA1CcVRo",
          authDomain: "emailaut-8374c.firebaseapp.com",
          databaseURL: "https://emailaut-8374c.firebaseio.com",
          projectId: "emailaut-8374c",
          storageBucket: "emailaut-8374c.appspot.com",
          messagingSenderId: "441619242876",
          appId: "1:441619242876:web:b77ee0cdc13ee5ee8ecef9"
        };
        // Initialize Firebase
        firebase.initializeApp(firebaseConfig);
function show(shown, hidden) {
    document.getElementById(shown).style.display='block';
    document.getElementById(hidden).style.display='none';
    return false;
  }//end show
   var xhrhr = new XMLHttpRequest();
   xhrhr.open("GET", "https://lowapi.herokuapp.com/count");
   
   xhrhr.send()
   
  const selectElement = document.getElementById('cho');
  console.log(selectElement)
  const lead=document.getElementById("ld")
  var root="https://api.eu-gb.discovery.watson.cloud.ibm.com/instances/2513799b-9d19-40ab-b66d-053d045afb4f/v1/environments/0d630b27-86da-4b56-b899-2945feb51293/collections/d704429d-0d6d-47f1-b090-c1c33786fa74/query?version=2018-12-03&deduplicate=false&highlight=true&passages=true&passages.count=5&highlight=true&natural_language_query=";
  var index=0
  selectElement.addEventListener('change', (event) => {
   root=event.target.value
  var x = document.getElementById("cho").selectedIndex;
  var y = document.getElementById("cho").options;
  index=x
  console.log(x)
  console.log(y[x].text)
  document.getElementById("title").innerHTML=y[x].text
  });
  var bu=document.getElementById("btn")
  const queryString = window.location.search
  var urlParams=null;
if(queryString!="")
{
    urlParams = new URLSearchParams(queryString);
    const word = urlParams.get('search');
    var st=document.getElementById("srt")
    if(word!=null)
    {
        st.value=word;
    serch()
    }
}
  bu.addEventListener("click",serch)
  function rovove(res)
  {
  var child = res.lastElementChild; 
  while (child) { 
              res.removeChild(child); 
              child = res.lastElementChild; 
          } 
          }//delete child
  function serch()
  {
  ld.className="loader "
  var st=document.getElementById("srt")
  if(st.value!="")
  {
    if ('URLSearchParams' in window) {
        var searchParams = new URLSearchParams(window.location.search);
        searchParams.set("search",st.value);
        var newRelativePathQuery = window.location.pathname + '?' + searchParams.toString();
        history.pushState(null, '', newRelativePathQuery);
    }
let database = firebase.database();
var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date+' '+time;
            let ref = database.ref('searchs');
            ref.push({searchfor:st.value,date:dateTime})  
  vir=document.getElementById("vir")
  vir.innerHTML=""
  vir.className=""
  var bout=document.getElementById("boutom")
  var res=document.getElementById("resp")
  var pes=document.getElementById("pesp")
  rovove(res)
  rovove(pes)
  
  var xhr = new XMLHttpRequest();
      xhr.onload = function(e) {
      ld.className=""
     
          if (this.readyState === 4) {
             
              var json=JSON.parse(e.target.responseText);
              
              var res=document.getElementById("resp")
              var pes=document.getElementById("pesp")
              if(index==0)
              {
              for(i=0;i<json.results.length;i++)
              {
              
              
              
              
              
              var btn = document.createElement("Div"); 
              var hid_div=document.createElement("Div")
              hid_div.innerHTML=json.results[i].text
              hid_div.style="display:none"
              hid_div.classList.add("white-space-pre");
              hid_div.border = " solid #0000FF"
              hid_div.id="hid"
              
              
              var but_text=document.createTextNode("إظهار-اخفاء القرار");
              var but_to_hid=document.createElement('Button');
              but_to_hid.className="btn btn-primary"
              but_to_hid.show=true
              but_to_hid.addEventListener("click",function(event){
              var nepage=document.getElementById("dt")
              var childs=event.target.parentElement.children
              childs= Array.from(childs);
              console.log(but_to_hid.show)
              for (i in childs)
              {
              if(childs[i].id=="hid")
              {
              nepage.innerHTML=childs[i].innerHTML
              
              
              }
              }
              var page=document.getElementById("Page1")
              nepage.parentElement.style.display="block"
              page.style.display="none"
              }//end function
              )//end add event
              
              but_to_hid.appendChild(but_text)
              
              btn.innerHTML = json.results[i].highlight.text+"<br><br>"; 
              
              btn.appendChild(but_to_hid)// Insert text
              btn.appendChild(hid_div)
              pes.appendChild(btn);  
              
              }//end for
              }//end if
              else
              {
              var btn = document.createElement("Div");
              
              btn.innerHTML = json.hello; 
              res.appendChild(btn); 
              }
              
          }
      };
      
      xhr.open("GET", root+st.value);
  xhr.setRequestHeader("Authorization", "Basic " + btoa("apikey:eE2buJm65mc_FtHzbhlV0M-sgrnp8cGuLrsrLCxZoPvo"));
  xhr.send()
  }//en if value
  else
  {
  vir=document.getElementById("vir")
  vir.innerHTML="لم تقم بادخال اي شيء"
  ld.className=""
  vir.className ="alert alert-danger"
  }
  }
  
  

      
  