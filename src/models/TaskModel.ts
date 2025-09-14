export type TaskModel = {
  id: string;
  name: string;
  duration: number; // duration in minutes
  startDate: number;
  completeDate: number | null; // When the task was completed
  interruptedDate: number | null; // When the task was interrupted
  type: 'workTime' | 'shortBreakTime' | 'longBreakTime';
};
