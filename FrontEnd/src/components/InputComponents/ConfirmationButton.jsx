export default function ConfirmationButton({ name }) {
  return (
    <>
      <button className="flex w-60 justify-center rounded-2xl bg-violet-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-violet-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
        {name}
      </button>
    </>
  );
}
