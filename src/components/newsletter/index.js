import React from "react";

function NewSletterBox() {
  const onsubmitHandler = (e) => {
    e.preventDefault();
    alert("Subscribed");
  };
  return (
    <div className="text-center max-sm:mt-10">
      <p className="text-2xl font-medium text-gray-800">
        Subscribe now and get 20% off
      </p>
      <p className="text-gray-400 mt-3">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
        odio. Praesent libero.
      </p>
      <form
        onSubmit={onsubmitHandler}
        className="w-1/2 max-sm:w-full flex items-center gap-4 mx-auto my-6 border pl-3 "
      >
        <input
          type="email"
          placeholder="Enter your email address"
          className="rounded-lg  focus:outline-none w-full sm:flex-1 "
          required
        />
        <button className="bg-black text-white text-xs px-10 py-4">
          Subscribe
        </button>
      </form>
    </div>
  );
}

export default NewSletterBox;
