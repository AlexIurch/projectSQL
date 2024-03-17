<template>
  <div class="home" id="mainBlock">
    <!-- Секція з кнопками для вибору рівня важкості завдань -->
    <div class="button-group mb-3">
      <!-- Кожна кнопка викликає метод selectLevel при кліку, передаючи рівень як аргумент -->
      <button type="button" class="btn btn-lg" @click="selectLevel('Basic')">
        Basic
      </button>
      <button
        type="button"
        class="btn btn-lg"
        @click="selectLevel('Intermediate')"
      >
        Intermediate
      </button>
      <button type="button" class="btn btn-lg" @click="selectLevel('Advanced')">
        Advanced
      </button>
      <button
        type="button"
        class="btn btn-lg"
        @click="selectLevel('WindowFunction')"
      >
        Window function
      </button>
    </div>
    <div class="button-group mb-3 mt-0">
      <button type="button" class="btn btn-lg" @click="selectLevel('Apply')">
        Apply
      </button>

      <button type="button" class="btn btn-lg" @click="selectLevel('Joins')">
        Joins
      </button>

      <button type="button" class="btn btn-lg" @click="selectLevel('SQLFunction')">
        Function in SQL
      </button>

      <button type="button" class="btn btn-lg" @click="selectLevel('View')">
        View
      </button>
    </div>

    <!-- Основна область контенту, де будуть відображені завдання -->
    <div class="content-area">
      <div class="block half me-1 d-flex flex-column">
        <div class="part w-100 mb-0" id="levelSelect">{{ taskTitle }}</div>
        <div id="instructionWrapper">
          <p v-if="!filteredTasks.length">
            Set Your Challenge: Choose a Level That Suits You
          </p>
          <p id="task" v-else-if="currentTask">{{ currentTask.description }}</p>
          <p id="noTasksMessage" v-else>No tasks available.</p>
        </div>

        <!-- Кнопки для навігації між завданнями -->
        <div id="questionsNav" class="d-flex justify-content-between mb-3">
          <button id="prevQuestionBtn" @click="previousTask">
            Previous question
          </button>
          <button id="nextQuestionBtn" @click="nextTask">Next question</button>
        </div>

        <div class="divider"></div>
        <div class="part w-100" style="flex-grow: 2">
          <div class="d-flex justify-content-between align-items-center">
            <button
              id="executeBtn"
              class="btn-custom mt-3"
              @click="checkSolution"
            >
              Execute
            </button>
            <span id="result" class="result-placeholder mt-3">{{
              resultMessage
            }}</span>
          </div>
          <textarea
            v-model="userSolution"
            class="textarea-sql"
            :class="{
              'is-correct': solutionCorrect === true,
              'is-incorrect': solutionCorrect === false,
            }"
            id="solutionTextArea"
            rows="10"
            placeholder="Enter the SQL query that solves the given task"
          ></textarea>
          <button
            v-if="showSolutionButton"
            id="showSolutionBtn"
            @mousedown="showSolution"
            @mouseup="hideSolution"
            @mouseleave="hideSolution"
          >
            Show correct answer
          </button>
        </div>
      </div>
      <div class="block half ms-1" id="rulesDesc">
        <h2 class="rulsHeader">Essential Rules and Guidelines</h2>
        <div class="rules">
          <p>{{ ruleDescription }}</p>

          <div class="LinkButtonDiv">
            <button
              v-if="link"
              @click="openDocumentation(link)"
              class="doc-button"
            >
              Discover Microsoft Learn
            </button>
            <p v-else class="LinkButtonDiv2"></p>
          </div>
        </div>
        <div class="currentLevelInfo">
          <header class="h5">Task Progress Tracker</header>
          <div class="currentLevelProgres">
            <div id="taskStatuses">
              <div
                v-for="(status, index) in taskSolvedStatus"
                :key="index"
                :class="[
                  'taskBlock',
                  {
                    correctTask: status === true,
                    incorrectTask: status === false,
                  },
                ]"
                @click="selectTask(index)"
              >
                {{ index + 1 }}
              </div>
            </div>
          </div>
          <!-- <header class="ansverForCurrentQuestion">Answer</header> -->
          <!-- <div class="currentAnsver"></div> -->
        </div>
      </div>
    </div>
    <!-- <div class="block result">Result</div> -->
  </div>
</template>

<script>
import { tasksBeginner } from "../data/taskBeginer";
import { tasksIntermediate } from "../data/tasksIntermediate";
import { tasksAdvanced } from "../data/tasksAdvanced";
import { tasksApply } from "../data/tasksApply";
import { tasksWindowFunction } from "../data/taskWindowFunction";
import { tasksJoins } from "../data/tasksJoin";
import {tasksFunctionsSQL} from "../data/taskSQLfunction"
import {tasksView} from "../data/tasksView"

import "./MainStyle.css";

export default {
  name: "NavModule",
  data() {
    return {
      allTasks: {
        Basic: tasksBeginner,
        Intermediate: tasksIntermediate,
        Advanced: tasksAdvanced,
        Apply: tasksApply,
        WindowFunction: tasksWindowFunction,
        Joins: tasksJoins,
        SQLFunction: tasksFunctionsSQL,
        View: tasksView,
      },
      ruleDescription: "Select a task to see rules and guidelines.",
      filteredTasks: [],
      currentTaskIndex: -1,
      taskTitle: "Adjust Your Level of Challenge",
      currentLevel: "",
      userSolution: "",
      solutionCorrect: null,
      resultMessage: "",
      link: "",
      taskSolvedStatus: [],
      showSolutionButton: false,
    };
  },
  methods: {
    selectLevel(level) {
      this.currentLevel = level;
      this.filteredTasks = this.allTasks[level];
      this.taskSolvedStatus = Array(this.filteredTasks.length).fill(null);
      this.currentTaskIndex = 0;
      this.taskTitle = `Expert Level: ${level}`;
      this.updateRuleDescription();
      this.updateLink();
      this.hideSolution();
    },
    nextTask() {
      if (this.currentTaskIndex < this.filteredTasks.length - 1) {
        this.currentTaskIndex++;
      } else {
        this.currentTaskIndex = 0; // Loop back to the first task
      }
      this.updateTaskDetails();
      this.resetTaskState();
      this.hideSolution();
    },
    previousTask() {
      if (this.currentTaskIndex > 0) {
        this.currentTaskIndex--;
      } else {
        this.currentTaskIndex = this.filteredTasks.length - 1; // Loop back to the last task
      }
      this.updateTaskDetails();
      this.resetTaskState();
      this.hideSolution();
    },
    selectTask(index) {
      this.currentTaskIndex = index;
      this.updateTaskDetails();
      this.resetTaskState();
      this.hideSolution();
    },
    updateTaskDetails() {
      const currentTask = this.filteredTasks[this.currentTaskIndex];
      this.ruleDescription = currentTask
        ? currentTask.ruleDescription
        : "No rule description available.";
      this.updateLink();
    },

    checkSolution() {
    if (this.currentTaskIndex === -1) return; 
    const selectedTask = this.filteredTasks[this.currentTaskIndex];
    const isCorrect =
      this.userSolution.trim().toLowerCase() ===
      selectedTask.solution.trim().toLowerCase();

    this.taskSolvedStatus.splice(this.currentTaskIndex, 1, isCorrect);
    this.solutionCorrect = isCorrect;
    this.resultMessage = isCorrect ? "Correct" : "Incorrect, try again!";
    this.showSolutionButton = !isCorrect; 
    this.userSolution = "";
  },
    showSolution() {
      if (!this.showSolutionButton) return;
    
    const selectedTask = this.filteredTasks[this.currentTaskIndex];
    this.userSolution = selectedTask.solution; 
  },
  
  hideSolution() {
    if (!this.showSolutionButton) return;
    
    this.userSolution = ""; 
    this.showSolutionButton = false; // Сховати кнопку
  },

    updateRuleDescription() {
      if (this.currentTaskIndex !== -1) {
        this.ruleDescription =
          this.filteredTasks[this.currentTaskIndex].ruleDescription ||
          "No rule description available.";
      } else {
        this.ruleDescription = "Select a task to see rules and guidelines.";
      }
    },

    updateLink() {
      const currentTask =
        this.currentTaskIndex !== -1
          ? this.filteredTasks[this.currentTaskIndex]
          : null;
      this.link = currentTask && currentTask.link ? currentTask.link : "";
    },
    openDocumentation(link) {
      window.open(link, "_blank");
    },

    // Additional method to handle task block color change and reset state as needed
    resetTaskState() {
      this.userSolution = "";
      this.solutionCorrect = null;
      this.resultMessage = "";
    },
  },

  computed: {
    currentTask() {
      return this.currentTaskIndex !== -1
        ? this.filteredTasks[this.currentTaskIndex]
        : null;
    },
  },
  watch: {
    currentLevel() {
      this.resetTaskState();
      this.currentTaskIndex = 0;
    },
  },
};
</script>

<style scoped>
.button-group {
  display: flex;
  justify-content: space-between;
  margin-top: 1em;
}

.btn-lg {
  border: 1px solid #007bff;
  width: 30px;
  flex-grow: 1;
  margin: 0 10px;
  height: 2.5em;
  font-size: 1.1em;
}

.btn-lg:hover {
  background-color: #007bff;
  color: #ffffff;
}
</style>
