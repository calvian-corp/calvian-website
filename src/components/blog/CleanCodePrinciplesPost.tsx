import React from "react";

const CleanCodePrinciplesPost: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      {/* --- Header Section --- */}
      <h1 className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
        10 Key Principles of Clean Code
      </h1>
      <p className="text-xl text-blue-600 mb-8 font-semibold">
        Practical tips and guidelines for writing more maintainable and readable software.
      </p>

      {/* --- Introduction --- */}
      <p className="text-lg leading-7 mb-6 text-gray-700">
        In the world of software development, code is read far more often than it is written. Therefore, writing **clean code** is not just an aesthetic choice; it's a critical professional discipline that impacts the maintainability, scalability, and long-term health of any project.
      </p>
      <p className="text-lg leading-7 mb-10 text-gray-700">
        Based on established best practices from industry leaders, here are **10 key principles** to help you transform your code from merely functional to truly clean.
      </p>

      {/* --- Principles Table Section --- */}
      <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b pb-2">
        The 10 Principles of Maintainable Software
      </h2>

      <div className="overflow-x-auto mb-10">
        <table className="min-w-full divide-y divide-gray-200 shadow-lg rounded-lg">
          <thead className="bg-gray-800">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider w-1/4 rounded-tl-lg">
                Principle
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider w-3/4 rounded-tr-lg">
                Actionable Tip
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {/* Principle 1: Meaningful Names */}
            <tr className="hover:bg-blue-50">
              <td className="px-6 py-4 whitespace-normal font-bold text-gray-900">
                1. Use Meaningful Names
              </td>
              <td className="px-6 py-4 whitespace-normal text-gray-700">
                Variables, functions, and classes should tell you *why* they exist. Avoid abbreviations and single-letter names (except for loop counters). Use **`daysSinceCreation`** instead of **`dsc`**.
              </td>
            </tr>
            {/* Principle 2: Functions Do One Thing */}
            <tr className="hover:bg-blue-50">
              <td className="px-6 py-4 whitespace-normal font-bold text-gray-900">
                2. Functions Should Do One Thing
              </td>
              <td className="px-6 py-4 whitespace-normal text-gray-700">
                Follow the **Single Responsibility Principle (SRP)**. If a function's name includes "and," you likely need to split it. Functions should be short, ideally fitting on one screen.
              </td>
            </tr>
            {/* Principle 3: Avoid Deep Nesting */}
            <tr className="hover:bg-blue-50">
              <td className="px-6 py-4 whitespace-normal font-bold text-gray-900">
                3. Avoid Deep Nesting
              </td>
              <td className="px-6 py-4 whitespace-normal text-gray-700">
                Minimize indentation and complex **`if/else`** or **`try/catch`** structures. Use early returns (guard clauses) to reduce complexity and keep the main path of execution clear.
              </td>
            </tr>
            {/* Principle 4: Write Clean Comments */}
            <tr className="hover:bg-blue-50">
              <td className="px-6 py-4 whitespace-normal font-bold text-gray-900">
                4. Write Clean Comments
              </td>
              <td className="px-6 py-4 whitespace-normal text-gray-700">
                Comments are a sign of failure if they explain **bad code**. Only use comments to explain *why* something is done (intent), not *what* it does (which the code should convey).
              </td>
            </tr>
            {/* Principle 5: Don't Repeat Yourself */}
            <tr className="hover:bg-blue-50">
              <td className="px-6 py-4 whitespace-normal font-bold text-gray-900">
                5. DRY (Don't Repeat Yourself)
              </td>
              <td className="px-6 py-4 whitespace-normal text-gray-700">
                Duplicate code increases maintenance cost. Extract repeated blocks of code into a single, reusable function, module, or class.
              </td>
            </tr>
            {/* Principle 6: Error Handling */}
            <tr className="hover:bg-blue-50">
              <td className="px-6 py-4 whitespace-normal font-bold text-gray-900">
                6. Implement Robust Error Handling
              </td>
              <td className="px-6 py-4 whitespace-normal text-gray-700">
                Don't return special error codes; **throw exceptions** instead. Wrap low-level third-party exceptions and rethrow your own custom exceptions to keep client code clean.
              </td>
            </tr>
            {/* Principle 7: Use Intention-Revealing Selectors */}
            <tr className="hover:bg-blue-50">
              <td className="px-6 py-4 whitespace-normal font-bold text-gray-900">
                7. Use Intention-Revealing Selectors
              </td>
              <td className="px-6 py-4 whitespace-normal text-gray-700">
                Avoid passing boolean flags as function arguments (e.g., `calculate(true)`). Instead, create two separate, clearly named functions: **`calculateTax()`** and **`calculateDiscount()`**.
              </td>
            </tr>
            {/* Principle 8: Keep Code Vertical */}
            <tr className="hover:bg-blue-50">
              <td className="px-6 py-4 whitespace-normal font-bold text-gray-900">
                8. Keep Code Vertical
              </td>
              <td className="px-6 py-4 whitespace-normal text-gray-700">
                Code should read like a narrative. Variables should be defined close to where they are used, and related functions should be grouped vertically in a file.
              </td>
            </tr>
            {/* Principle 9: Be Consistent */}
            <tr className="hover:bg-blue-50">
              <td className="px-6 py-4 whitespace-normal font-bold text-gray-900">
                9. Be Consistent
              </td>
              <td className="px-6 py-4 whitespace-normal text-gray-700">
                Once you choose a naming convention (e.g., camelCase or snake_case), file structure, or style (e.g., use of semi-colons), stick to it across the entire codebase. Use **linters** to enforce consistency.
              </td>
            </tr>
            {/* Principle 10: Write Tests First (TDD) */}
            <tr className="hover:bg-blue-50">
              <td className="px-6 py-4 whitespace-normal font-bold text-gray-900">
                10. Write Tests First (TDD)
              </td>
              <td className="px-6 py-4 whitespace-normal text-gray-700">
                Writing tests *before* the implementation forces you to think about the public API and makes the code more testable, which is a key trait of **clean architecture**.
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* --- Conclusion --- */}
      <h2 className="text-3xl font-bold text-gray-900 mt-10 mb-6 border-b pb-2">
        The Goal: Reduce the Cost of Change
      </h2>
      <p className="text-lg leading-7 mb-4 text-gray-700">
        Following these principles significantly improves a codebase's **readability**, making it easier for new team members to onboard and for existing developers to quickly understand, debug, and modify code.
      </p>
      <p className="text-xl leading-8 mt-6 pt-4 border-t border-gray-300 font-medium text-gray-800 italic">
        "The only way to go fast is to go well." By investing time in writing clean code today, you dramatically **reduce the cost of change** tomorrow, ensuring your software remains flexible and robust for years to come.
      </p>
    </div>
  );
};

export default CleanCodePrinciplesPost;