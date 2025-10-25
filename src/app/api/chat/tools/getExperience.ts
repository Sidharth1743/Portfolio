import { tool } from 'ai';
import { z } from 'zod';

export const getExperience = tool({
  description:
    'This tool shows my work experience, internships, and professional background. Use this when the user asks about my experience, work history, or career.',
  parameters: z.object({}),
  execute: async () => {
    return "Here is my work experience and professional background above. Feel free to ask me more about any specific role or project!";
  },
});
