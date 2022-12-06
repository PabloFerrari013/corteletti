import { faunadb } from '../../../../services/fauna'
import { query as q } from 'faunadb'
import { NextApiRequest, NextApiResponse } from 'next'

interface UserProps {
  error?: {
    message: string
    status: number
  }
  data?: {
    name: string
    email: string
    password: string
    token: string
    status: boolean
  }
}

async function findUser(email: string, token: string): Promise<UserProps> {
  const user: UserProps | false = await faunadb.query(
    q.If(
      q.Exists(q.Match(q.Index('user_by_email'), q.Casefold(email))),
      q.Get(q.Match(q.Index('user_by_email'), q.Casefold(email))),
      false
    )
  )

  if (!user)
    return {
      error: {
        message: 'Usuário não encontrado',
        status: 404
      }
    }

  if (user.data?.token === token) {
    return user
  }

  return {
    error: {
      message: 'Token inválido',
      status: 401
    }
  }
}

const CreateToken = async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case 'GET':
      try {
        const email = req.query.data ? req.query.data[0] : ''

        const token = req.query.data ? req.query.data[1] : ''

        const user = await findUser(email, token)

        if (user.error) {
          return res
            .status(user.error.status)
            .json({ error: user.error.message })
        }

        return res.status(200).json({ user })
      } catch (error) {
        console.log(error)

        return res.status(500).json({ error: 'Conflito interno' })
      }

    default:
      throw new Error('Evento não tratado')
  }
}

export default CreateToken
