const StaticValue = require("./static");
const mongoose = require("mongoose");
const moment = require("moment-timezone");

// moment.tz.setDefault("Asia/Ho_Chi_Minh");

const dataSchema = new mongoose.Schema({
  name: {
    required: true,
    type: String,
  },
  typeId: {
    required: true,
    type: String,
  },
  userId: {
    required: true,
    type: String,
  },
  description: {
    required: false,
    type: String,
    default: null,
  },
  files: {
    required: false,
    type: [
      {
        name: String,
        type: String,
        url: String,
      },
    ],
  },
  checkList: {
    required: false,
    type: [
      {
        checkId: String,
        checkName: String,
        isDone: Boolean,
      },
    ],
  },
  isImportant: {
    required: false,
    type: Boolean,
    default: false,
  },
  status: {
    require: true,
    type: String,
    default: StaticValue.TASK_STATUS_NEW,
  },
  // Date Time
  startTime: {
    required: false,
    type: Date,
    default: null,
  },
  dueTime: {
    required: false,
    type: Date,
    default: null,
  },
  remindTime: {
    required: false,
    type: Date,
    default: null,
  },
  repeatTime: {
    required: false,
    type: String,
    default: null,
  },
  isRepeatedById: {
    required: false,
    type: String,
    default: null,
  },
  //Default
  createdDate: {
    required: false,
    type: Date,
    default: null,
  },
  updatedDate: {
    required: false,
    type: Date,
    default: null,
  },
  isDeleted: {
    required: false,
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("task", dataSchema);
