import { z } from 'zod';

export const postSchema = z.object({
  title: z.string({
    required_error: 'Required frontmatter missing: title',
    invalid_type_error: 'title must be a string'
  }),
  description: z.string({
    required_error: 'Required frontmatter missing: description',
    invalid_type_error: 'description must be a string'
  }),
  date: z.date({
    required_error: 'Required frontmatter missing: date',
    invalid_type_error:
      'date must be written in yyyy-mm-dd format without quotes: For example, Jan 22, 2000 should be written as 2000-01-22.'
  }),
  ogImagePath: z
    .string({
      invalid_type_error: 'ogImagePath must be a string'
    })
    .optional(),
  unlisted: z.boolean().default(false)
});
