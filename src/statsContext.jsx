// StatsContext.jsx
import { createContext, useContext, useState } from "react";

const StatsContext = createContext(null);

// optional helpers (can be replaced with real logic later)
export const getMeals = () => [];
export const getWorkouts = () => [];
export const getMacroTargets = () => ({});

export const StatsProvider = ({ children }) => {
  const [thisWeeksWorkoutsCount, setThisWeeksWorkoutsCount] = useState(0);
  const [todaysKcal, setTodaysKcal] = useState(1300);
  const [todaysProtein, setTodaysProtein] = useState(75);
  const [todaysFats, setTodaysFats] = useState(50);
  const [todaysCarbs, setTodaysCarbs] = useState(170);
  const [totalWorkoutCount, setTotalWorkoutCount] = useState(0);
  const [totalWorkoutMins, setTotalWorkoutMins] = useState(0);
  const [kcalTarget, setKcalTarget] = useState(1500);
  const [fatsTarget, setFatsTarget] = useState(60);
  const [proteinTarget, setProteinTarget] = useState(120);
  const [carbsTarget, setCarbsTarget] = useState(200);
  const [username, setUsername] = useState("Priyanshu");
  const [email, setEmail] = useState("priyanshu@example.com");
  const [activeGraphItems, setactiveGraphItems] = useState(["weight"]);
  const [trackedStats, setTrackedStats] = useState([
  "Weight",
]);

const [bodyStats, setBodyStats] = useState([
  {
    date: '2024-01-01',
    weight: 92,
  },
]);

const [units, setUnits] = useState({
  weight: "Kg",
});


  return (
    <StatsContext.Provider
      value={{
        thisWeeksWorkoutsCount,
        setThisWeeksWorkoutsCount,
        todaysKcal,
        setTodaysKcal,
        todaysProtein,
        setTodaysProtein,
        todaysFats,
        setTodaysFats,
        todaysCarbs,
        setTodaysCarbs,
        totalWorkoutCount,
        setTotalWorkoutCount,
        totalWorkoutMins,
        setTotalWorkoutMins,
        kcalTarget,
        setKcalTarget,
        fatsTarget,
        setFatsTarget,
        proteinTarget,
        setProteinTarget,
        carbsTarget,
        setCarbsTarget,
        username,
        setUsername,
        email,
        setEmail,
        activeGraphItems,
        setactiveGraphItems,
        trackedStats,
        setTrackedStats,
        bodyStats,
        setBodyStats,
        units,
        setUnits,
      }}
    >
      {children}
    </StatsContext.Provider>
  );
};

export const useStats = () => {
  const ctx = useContext(StatsContext);
  if (!ctx) throw new Error("useStats must be used inside StatsProvider");
  return ctx;
};
