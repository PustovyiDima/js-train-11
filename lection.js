// let userIdList = new Set([7734, 1258, 7432, 1366]);
// console.log(userIdList); //Set(6) { 7734, 1258, 7432, 1366 }
// =========================================================
// for (const value of userIdList) {
//    console.log(value);
// }
// =========================================================
// userIdList.forEach((value, value2, set) => console.log(value));
// =========================================================
// console.log(userIdList.size);
// console.log(userIdList);
// userIdList.add(1);
// console.log(userIdList);
// console.log(userIdList.size);
// userIdList.add(12);
// console.log(userIdList);
// console.log(userIdList.size);
// =========================================================
// userIdList.delete(12);
// console.log(userIdList);
// console.log(userIdList.size);
// userIdList.delete(34);
// console.log(userIdList);
// =========================================================
// console.log(userIdList.size);
// console.log(userIdList.add(34));
// console.log(userIdList.delete(34)); //true element deleted
// console.log(userIdList.has(34)); //false element not exist
// console.log(userIdList.size);
// console.log(userIdList.clear());
// console.log(userIdList.size);
// =========================================================
// const key = userIdList.keys();
// console.log(key);

// const val = userIdList.values();
// console.log(val);
// =========================================================
// const entr = userIdList.entries();
// console.log(entr);

// const obj = Object.fromEntries(entr);
// console.log(obj);
// =========================================================
// const valueList = userIdList.values();
// let arr = Array.from(valueList);
// console.log(arr);
// =========================================================
// let arr = [1, 2, 3, 4, 5, 1, 2, 4, 3, 5, 6];
// let set = new Set(arr);
// console.log(set);
// // const arr2 = [...set];
// // const arr2 = Array.from(set.values());
// const arr2 = Array.from(set);
// console.log(arr2);
// =========================================================
// const categoryList = new Set();

// function addCategory(set, category) {
//    if (set.has(category)) {
//       console.log("Set has this category");
//       return false;
//    }
//    set.add(category);
//    return true;
// }

// console.log(addCategory(categoryList, 1));
// console.log(addCategory(categoryList, 1));
// =========================================================
// const students = [
//    { id: 1, name: "John", course: "Math" },
//    { id: 2, name: "Jane", course: "Sciense" },
//    { id: 3, name: "Adam", course: "Math" },
//    { id: 4, name: "Eve", course: "English" },
//    { id: 5, name: "Kate", course: "Sciense" },
// ];

// const courseList = new Set(students.map((student) => student.course));

// console.log(courseList);

// let courseList2 = Array.from(courseList);
// console.log(courseList2);
