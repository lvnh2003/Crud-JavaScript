const students = [
    {
        id: 1,
        name: "Dinh",
        diachi: "hue"
    },
    {
        id: 2,
        name: "Nam",
        diachi: "quang nam"
    },
    {
        id: 3,
        name: "Tan",
        diachi: "da nang"
    },
    {
        id: 4,
        name: "Hung",
        diachi: "hue"
    },
    {
        id: 5,
        name: "Tri",
        diachi: "quang tri"
    },
    {
        id: 6,
        name: "Anh",
        diachi: "hue"
    },
    {
        id: 7,
        name: "Binh",
        diachi: "da nang"
    }
];

function show(array) {
    console.log(array);
}
function createStudent(array) {
    var student={};
     student.id=array.length+1;
     student.name= prompt('name: ');
     student.diachi=prompt('dia chi:');
    array.push(student);
    show(array);
}
function editStudent(array)
{
    var id=prompt('Nhập mã sinh viên cần sửa: ');

    var studentA= array.find(function(student)
    {
        return student.id==id;
    });
    if(studentA){
        var studentB={};
        studentB.name= prompt('name: ',studentA.name);
        studentB.diachi=prompt('dia chi:',studentA.diachi);
        
        var newArr=array.map(function(student){
            if(student.id==id){
                return {
                    id:student.id,
                    name:studentB.name,
                    diachi: studentB.diachi
                }
            }
            else{
                return {
                    id:student.id,
                    name:student.name,
                    diachi: student.diachi
                }
            }
            
        });
    }
    else{
        alert('Không tồn tại sinh viên');
    }
    show(newArr);
}
function deleteStudent(array)
{
    var id=prompt('Nhập mã sinh viên muốn xóa');
    var studentA= array.find(function(student)
    {
        return student.id==id;
    });
    if(studentA)
    {
        array.splice(id-1,1);
    }
    else{
        alert('Không tồn tại sinh viên');
    }
    show(array);
    
}
var menu = `1.Xem danh sách sinh viên \n`
    + `2.Thêm sinh viên\n`
    + `3.Sửa sinh viên\n`
    + `4.Xóa sinh viên\n`;
let choose = prompt(menu);

switch (choose) {
    case '1':
        show(students);
        break;
    case '2':
        createStudent(students);
        break;
    case '3':
        editStudent(students);
        break;
    case '4':
        deleteStudent(students);
        break;
    default:
        break;
}