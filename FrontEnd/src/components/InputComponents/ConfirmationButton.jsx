export default function ConfirmationButton({ name, action, onClick }) {
  return (
    <>
      <button
        onClick={onClick}
        type={action}
        className="flex w-36 justify-center rounded-lg bg-violet-500 px-6 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-violet-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        {name}
      </button>
    </>
  );
}
