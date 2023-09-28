import { QuestionTypes } from '../enums/QuestionsTypes';

export const questions = [
  {
    type: QuestionTypes.ShortAnswer,
    label: 'Short Answer',
    question:
      'What regions within Saudi Arabia are you available to pursue a traineeship opportunity? You may select multiple options that apply',
    content: 'Dorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  {
    type: QuestionTypes.Video,
    label: 'Video Upload',
    question:
      'What regions within Saudi Arabia are you available to pursue a traineeship opportunity? You may select multiple options that apply',
    content: 'Dorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  {
    type: QuestionTypes.Number,
    label: 'Number',
    question:
      'What regions within Saudi Arabia are you available to pursue a traineeship opportunity? You may select multiple options that apply',
    content: 'Dorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  {
    type: QuestionTypes.MultipleChoice,
    label: 'Multiple Choice',
    question:
      'What regions within Saudi Arabia are you available to pursue a traineeship opportunity? You may select multiple options that apply',
    content: ['New York', 'Los Angeles', 'California']
  },
  {
    type: QuestionTypes.Paragraph,
    label: 'Paragraph',
    question:
      'What regions within Saudi Arabia are you available to pursue a traineeship opportunity? You may select multiple options that apply',
    content: 'Dorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  {
    type: QuestionTypes.YesNo,
    label: 'Yes/No',
    question:
      'What regions within Saudi Arabia are you available to pursue a traineeship opportunity? You may select multiple options that apply',
    content: 'Yes'
  },
  {
    type: QuestionTypes.DropdownSelect,
    label: 'Dropdown',
    question:
      'What regions within Saudi Arabia are you available to pursue a traineeship opportunity? You may select multiple options that apply',
    content: 'Option 1'
  },
  {
    type: QuestionTypes.Date,
    label: 'Date',
    question:
      'What regions within Saudi Arabia are you available to pursue a traineeship opportunity? You may select multiple options that apply',
    content: '2023-09-26'
  },
  {
    type: QuestionTypes.FileUpload,
    label: 'File',
    question:
      'What regions within Saudi Arabia are you available to pursue a traineeship opportunity? You may select multiple options that apply',
    content: 'File.txt'
  }
];
