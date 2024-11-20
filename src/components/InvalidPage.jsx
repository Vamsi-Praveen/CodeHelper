import Leetcode from "/images/leetcode.png";

const InvalidPage = () => {
  return (
    <div className="min-w-[300px] flex items-center justify-center flex-col gap-3 text-sm font-medium p-1">
      <img src={Leetcode} alt="Leetcode Icon" className="size-16 object-fill" />
      <h1 className="font-semibold text-lg">Oops!!</h1>
      <p>
        This extension is{" "}
        <span className="text-red-600 font-semibold">Not Supported</span> on
        this page.
      </p>
      <p>
        <span className="font-semibold text-red-600">Note:</span> The Code
        Helper Extension is used on{" "}
        <a
          href="https://leetcode.com/problems"
          target="_blank"
          className="font-semibold tracking-wide underline underline-offset-1 text-green-800"
        >
          Leetcode
        </a>{" "}
        page only.
      </p>
    </div>
  );
};

export default InvalidPage;
