// cho 1 mang nhu sau
 
let student = [
    {
        name: "Duong",
        age: 11,
        hobbies: ["video game","sleep","learn"]
    },
    {
        name: "Dong",
        age: 12,
        hobbies: ["video game","sick","study"]
    },
    {
        name: "Minh",
        age: 13,
        hobbies: ["video game","sick","learn"]
    },
    {
        name: "Thanh",
        age: 9,
        hobbies: ["play game","sleep","learn"]
    },
    {
        name: "Hung",
        age: 11,
        hobbies: ["play game","sick","study"]
    }
]
 
// Cau 1: nhap tuoi va in ra name cua nhung ai co so tuoi da nhap
// cau 2: Nhap so thich, và in ra toàn bộ sở thích và name của những ai có chứa sở thích đó.
// Câu 3: Lọc ra những ai có sở thich là study và in ra nó.
// Cau 4: thay doi toan bo nhung ai co tuoi == 11 thành 15. (sử dụng map nhé).

let ask1 = prompt("Câu 1: Nhập số tuổi")
console.log("----Câu 1: Tên người dùng có số tuổi " + ask1 + " là:");
let result1 = 0
for (let i of student){
    if(i.age == ask1){
        result1++
        console.log(i.name)
    }
}

if(result1 ==0){console.log("Không tìm thấy độ tuổi cần tìm");}

////==========
let ask2 = prompt("Câu 2: Nhập sở thích")
console.log("----Câu 2: Tên và toàn bộ sở thích của người có sở thích " + ask2 + " là:");
let result2 = 0
for (let i of student){
    for (let j of i.hobbies){
        if (j==ask2){
            console.log(i.name + " và sở thích là: " + i.hobbies.join(","))
            result2++
        }

    }
}

if(result2 ==0){console.log("Không tìm thấy người có sở thích như vậy");}
/////======

let ask3 = "study"
console.log("----Câu 3: Tên của những người có sở thích study là :");
let result3 = 0
for (let i of student){
    for (let j of i.hobbies){
        if (j==ask3){
            console.log(i.name)
            result3++
        }

    }
}

/////====

console.log("---Câu 4:")
student.map((x)=>{
    if(x.age == 11){
        x.age = 15 
    } 
}); 
console.log(student);

console.log("Đã sửa tuổi từ 11 thành 15!!")