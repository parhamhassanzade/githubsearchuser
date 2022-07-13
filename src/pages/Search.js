import { Form, Formik } from "formik";
import { useState, useContext } from "react";
import Input from "../components/Form/input";
import { Request } from "../api/fetcher";
import apiRoutes from "../utils/routs/apiRouts";
import ProfileCard from "../components/ProfileCard";
import RepoList from "../components/RepoList";
import { GeneralContext } from "../context/GeneralContext";

const Search = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [profileData, setProfileData] = useState();
  const [repoData, setDataData] = useState();
  const [info, setInfo] = useContext(GeneralContext);

  const SupportFormHandler = async (values, actions) => {
    let response = await Request(apiRoutes.getuser + `${values.username}`);
    if (response.status === 200) {
      await setProfileData(response.data);
      setIsLoading(true);
      setInfo((prev)=>[...prev,response.data]);
      actions.resetForm();
      getRepository(values);
    }
  };
  const getRepository = async (values) => {
    let response = await Request(`users/${values.username}/repos`);
    if (response.status === 200) {
      await setDataData(response.data);
      setIsLoading(true);
    }
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
                    type="submit"
                    className="sm:rounded-2xl w-full text-center h-14 sm:h-16 sm:text-2xl text-white  bg-dark-sky-blue disabled:bg-pinkish-grey"
                  >
                    search
                  </button>
                </Form>
              )}
            </Formik>
            {isLoading && <ProfileCard profileData={profileData} />}
            {isLoading && <RepoList repoData={repoData} />}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Search;
