// StatsContext.jsx
import { createContext, useContext, useState } from "react";

const StatsContext = createContext(null);

// optional helpers (can be replaced with real logic later)
export const getMeals = () => [];
export const getWorkouts = () => [];
export const getMacroTargets = () => ({});

export const StatsProvider = ({ children }) => {
  const [thisWeeksWorkoutsCount, setThisWeeksWorkoutsCount] = useState(0);
  const [todaysKcal, setTodaysKcal] = useState(0);
  const [todaysProtein, setTodaysProtein] = useState(0);
  const [todaysFats, setTodaysFats] = useState(0);
  const [todaysCarbs, setTodaysCarbs] = useState(0);
  const [totalWorkoutCount, setTotalWorkoutCount] = useState(0);
  const [totalWorkoutMins, setTotalWorkoutMins] = useState(0);
  const [kcalTarget, setKcalTarget] = useState(0);
  const [fatsTarget, setFatsTarget] = useState(0);
  const [proteinTarget, setProteinTarget] = useState(0);
  const [carbsTarget, setCarbsTarget] = useState(0);

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
