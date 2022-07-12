const RepoList = ({ repoData }) => {
  return (
    <div className="mt-5  rounded-lg  border-gray-200 shadow-md p-3 bg-light-green">
      <h5 className="mb-3 text-base font-semibold text-gray-900 lg:text-xl">
        repository List:
      </h5>

      <ul className="my-4 space-y-3">
        {repoData &&
          repoData.map((repo) => (
            <li className="flex items-center p-3 text-tiny text-gray-900 bg-gray-50 rounded-lg hover:bg-gray-100  hover:shadow gap-3">
              <a href={repo.url} target="_blank">
                <span className="text-error">{repo.name}</span>
              </a>
              <span className="">{repo.description}</span>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default RepoList;
