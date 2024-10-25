import { test, expect } from "@playwright/test";
import axios from "axios";

test("get all - validate a specific user is in the array", async ({ page }) => {
  const resposne = await axios.get("https://reqres.in/api/users?page=2");

  const expected_user = {
    id: 12,
    email: "rachel.howell@reqres.in",
    first_name: "Rachel",
    last_name: "Howell",
    avatar: "https://reqres.in/img/faces/12-image.jpg",
  };

  expect(resposne.status).toEqual(200);

  console.log(resposne.data);

  const users_array = resposne.data.data;

  expect(users_array).toContainEqual(expected_user);
});

test("Create New User", async ({ page }) => {
  const data = {
    name: "morpheus",
    job: "leader",
  };

  const resposne = await axios.post("https://reqres.in/api/users", data);

  expect(resposne.status).toEqual(201);

  //validating with getting th whole array of users 
});

test("edit a given user", async ({ page }) => {
  const user_update = {
    name: "morpheus",
    job: "zion resident",
  };

  const resposne = await axios.put("https://reqres.in/api/users/2",user_update)

  expect(resposne.status).toEqual(200)

  //can validate with getting the whole array of users
});


test("Delete a given user", async ({ page }) => {
  const user_update = {
    name: "morpheus",
    job: "zion resident",
  };

  const resposne = await axios.delete("https://reqres.in/api/users/2")

  expect(resposne.status).toEqual(204)

  //can validate with getting the whole array of users and see that the suer is not there any more 
});