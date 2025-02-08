import { signUp, signIn } from '@/lib/auth'

describe('Authentication', () => {
  it('should create a new user', async () => {
    const result = await signUp('test@example.com', 'password123', 'Test User')
    expect(result.user).toBeDefined()
  })

  it('should authenticate existing user', async () => {
    const result = await signIn('test@example.com', 'password123')
    expect(result.user).toBeDefined()
  })
}) 