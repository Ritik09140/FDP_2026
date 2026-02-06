const list=document.getElementById("problemList");

for(let i=2;i<=20;i++){
  const d=document.createElement("div");
  d.className="card list";
  d.innerHTML=`<h3><a href="#" onclick="openProblem(${i})">${i}. LeetCode Problem</a></h3>
               <p>Practice problem ${i} with optimized approach.</p>`;
  list.appendChild(d);
}

const DATA={
  1:{
    title:"LeetCode 1 – Two Sum",
    statement:"Given an integer array nums and a target...",
    example:"Input: nums=[2,7,11,15], target=9\nOutput: [0,1]",
    solution:"HashMap approach",
    explain:"O(n) time"
  }
};

function openProblem(id){
  const p=DATA[id];
  if(!p) return;
  document.getElementById("detail").style.display="block";
  document.getElementById("d-title").innerText=p.title;
  document.getElementById("d-statement").innerText=p.statement;
  document.getElementById("d-example").innerText=p.example;
  document.getElementById("d-solution").innerText=p.solution;
  document.getElementById("d-explain").innerText=p.explain;
}

function toggleSol(){
  const s=document.getElementById("sol");
  s.style.display=s.style.display==="block"?"none":"block";
}

function run(){
  const v=document.getElementById("code").value;
  const o=document.getElementById("out");
  const p=v.split("|");

  if(p.length!==2){
    o.innerText="Use nums | target format";
    return;
  }

  const nums=p[0].split(",").map(Number);
  const target=Number(p[1]);
  const map={};

  for(let i=0;i<nums.length;i++){
    const c=target-nums[i];
    if(map[c]!==undefined){
      o.innerText=`Output: [${map[c]}, ${i}]`;
      return;
    }
    map[nums[i]]=i;
  }

  o.innerText="No valid solution";
}
