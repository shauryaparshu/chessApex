import React from "react";
import Link from "next/link";

const BeginnerPlan = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <h1 className="mb-8 text-center text-4xl font-bold">
          Beginner Chess Course
        </h1>
        <p className="mb-8 text-center">
          This plan is perfect for beginners looking to learn the basics of
          chess.
        </p>

        <div className="rounded-lg bg-white p-6 shadow-lg">
          <ul className="mb-6">
            <li>2 Classes/week</li>
            <li>Weekly Quizzes</li>
            <li>Private Google Classroom Access</li>
            <li>Recorded Videos</li>
            <li>Group Discussions</li>
            <li>Interactive Puzzles</li>
            <li>Personalized Assignments</li>
            <li>Tactical Training</li>
            <li>In-Depth Concept Explanations</li>
            <li>Practical Gameplay Examples</li>
          </ul>
          <h3 className="mb-2 text-xl font-bold">Student Saver Plans</h3>
          <div className="mb-4">
            <p className="font-bold">Full Payment Plan</p>
            <p>₹4400</p>
          </div>
          <div className="mb-4">
            <p className="font-bold">Two Installment Plan</p>
            <p>₹4800 (₹2400 x 2)</p>
          </div>
          <div className="mb-4">
            <p className="font-bold">Three Installment Plan</p>
            <p>₹4800 (₹1600 x 3)</p>
          </div>
          <Link href="/register">
            <p className="inline-block rounded-lg bg-blue-500 px-6 py-2 text-white hover:bg-blue-600">
              Register Now
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BeginnerPlan;
