const JobCard = ({ children }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition text-lg font-medium text-center">
      {children}
    </div>
  );
};

export default JobCard;
