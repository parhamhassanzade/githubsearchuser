import { Form, Formik } from "formik";
import { useState } from "react";
import Input from "../components/Form/input";
import { Request } from "../api/fetcher";
import apiRoutes from "../utils/routs/apiRouts";
import ProfileCard from "../components/ProfileCard";
const Search = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const SupportFormHandler = async (values, actions) => {
    let response = await Request(apiRoutes.getuser + `${values.username}`);
  };
  return (
    <main className="container mx-auto px-2 mb-16">
      <div className="text-xs sm:text-base">
        <div className="my-10 sm:w-5/6 lg:w-3/6 m-auto">
          <div className="mt-9">
            <Formik
              initialValues={{
                username: "",
              }}
              onSubmit={SupportFormHandler}
            >
              {(formikProps) => (
                <Form>
                  <Input
                    labelClass="font-medium text-lg"
                    type="text"
                    name="username"
                    placeholder="enter username"
                    label="search by userName"
                  />

                  <button
                    disabled={!formikProps.isValid || isLoading}
                    type="submit"
                    className="sm:rounded-2xl w-full text-center h-14 sm:h-16 sm:text-2xl text-white  bg-dark-sky-blue disabled:bg-pinkish-grey"
                  >
                    search
                  </button>
                </Form>
              )}
            </Formik>
          <ProfileCard />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Search;
