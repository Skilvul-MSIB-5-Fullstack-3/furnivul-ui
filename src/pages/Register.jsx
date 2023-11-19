<<<<<<< HEAD
import React from "react";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";

const Register = () => {
  return (
    <section className="bg-cyan-800 dark:bg-gray-900 pt-8 h-[100%] justify-center bg-background bg-no-repeat bg-cover bg-center">
      <div className="justify-center py-8 px-4 mx-auto max-w-screen-xl lg:py-16 grid lg:gap-8 lg:gap-16">
        <div className="mt-8 pt-8">
          <div className="w-full lg:max-w-xl p-6 space-y-8 sm:p-8 bg-white rounded-lg shadow-xl dark:bg-gray-800 mt-8 pt-8 justify-center">
            <div className="flex gap-4 mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white text-center justify-center">
              <img src="../assets/logo-login.svg" alt="" />
            </div>
            <form className="mt-8 space-y-6 mx-3" action="#">
              <div>
                <Label
                  htmlFor="name"
                  className="block mb-2 text-3xl font-bold text-gray-900 dark:text-white justify-center"
                >
                  Sign Up
                </Label>
                <Label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-4"
                >
                  Your name
                </Label>
                <TextInput
                  id="name"
                  placeholder="Name"
                  className="input-field"
                  required
                />
              </div>
              <div>
                <Label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-4"
                >
                  Email address
                </Label>
                <TextInput
                  id="email"
                  placeholder="name@mail.com"
                  className="input-field"
                  required
                />
              </div>
              <div>
                <Label
                  htmlFor="password1"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-4"
                >
                  Your password
                </Label>
                <TextInput id="password1" type="password" required />
              </div>

              <div className="flex items-start mt-4 mb-4">
                <Checkbox
                  id="remember"
                  aria-describedby="remember"
                  name="remember"
                  type="checkbox"
                  className="checkbox-field"
                  required
                />
                <Label htmlFor="remember" className="ml-2 text-sm">
                  Remember this device
                </Label>
                <a
                  href="#"
                  className="ml-auto text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
                >
                  Lost Password?
                </a>
              </div>
              <Button type="submit" id="btn-submit" className="submit-button">
                Register
              </Button>
              <div className="text-sm font-medium text-gray-900 dark:text-white">
                Have an account?
                <a
                  href="../login/login.html"
                  className="text-blue-600 hover:underline dark:text-blue-500"
                >
                  Login
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

=======
import { Button, Checkbox, Label, TextInput } from "flowbite-react";

function Register() {
  return (
    <>
      <section className="bg-cyan-800 dark:bg-gray-900 pt-8 h-[100%] justify-center bg-background bg-no-repeat bg-cover bg-center">
        <div className="justify-center py-8 px-4 mx-auto max-w-screen-xl lg:py-16 grid lg: gap-8 lg:gap-16">
          <div className="mt-8 pt-8">
            <div className="w-full lg:max-w-xl p-6 space-y-8 sm:p-8 bg-white rounded-lg shadow-xl dark:bg-gray-800 mt-8 pt-8 justify-center">
              <div className="flex gap-4 mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white text-center justify-center">
                <img src="../assets/logo-login.svg" alt="" />
              </div>
              <form className="mt-8 space-y-6 mx-3" action="#">
                <div>
                  <label className="block mb-2 text-3xl font-bold text-gray-900 dark:text-white justify-center">
                    Sign Up
                  </label>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-4">
                    Your name
                  </label>
                  <input
                    id="name"
                    placeholder="name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-4">
                    Email address
                  </label>
                  <input
                    id="email"
                    placeholder="name@mail.com"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-4">
                    Your password
                  </label>
                  <TextInput id="password1" type="password" required />
                </div>

                <div className="flex items-start mt-4 mb-4">
                  <div className="flex items-center h-5">
                    <Checkbox
                      id="remember"
                      aria-describedby="remember"
                      name="remember"
                      type="checkbox"
                      className="w-4 h-4 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
                      required
                    />
                  </div>
                  <div className="ml-2 text-sm">
                    <Label className="font-medium text-gray-500 dark:text-gray-400">
                      Remember this device
                    </Label>
                  </div>
                  <a
                    href="#"
                    className="ml-auto text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
                  >
                    &nbsp; Lost Password?
                  </a>
                </div>
                <Button
                  type="submit"
                  id="btn-submit"
                  className="mx-auto px-8 py-3 text-base bg-blue-900 font-medium text-center text-white rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 sm:w-auto dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mb-3"
                >
                  Register
                </Button>
                <div className="text-sm font-medium text-gray-900 dark:text-white">
                  have an acoount?
                  <a
                    href="../login/login.html"
                    className="text-blue-600 hover:underline dark:text-blue-500"
                  >
                    Login
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
>>>>>>> bf15cc703c364308ce99ea3fdece4a2a8e02a77e
export default Register;
