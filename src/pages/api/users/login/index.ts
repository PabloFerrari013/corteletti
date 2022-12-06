import { faunadb } from '../../../../services/fauna'
import { query as q } from 'faunadb'
import { NextApiRequest, NextApiResponse } from 'next'
import bcrypt from 'bcrypt'
import { v4 as uuid } from 'uuid'

interface VerifyUserProps {
  name: string
  email: string
  password: string
}

interface SaveUserProps {
  name: string
  email: string
  password: string
  token: string
}

// interface UserProps {
//   data: {
//     name: string
//     email: string
//     password: string
//     token: string
//     status: boolean
//   }
// }

interface LoginResponseData {
  data?: {
    name: string
    email: string
    password: string
    token: string
    status: boolean
  }
}

async function verifyUser({
  email,
  name,
  password
}: VerifyUserProps): Promise<LoginResponseData | { error: number }> {
  async function getUser(email: string) {
    const reponse = await faunadb.query(
      q.If(
        q.Exists(q.Match(q.Index('user_by_email'), q.Casefold(email))),
        q.Get(q.Match(q.Index('user_by_email'), q.Casefold(email))),
        false
      )
    )

    return reponse
  }

  async function compareHash(
    password: string
  ): Promise<LoginResponseData | { error: number }> {
    try {
      const response: LoginResponseData = await getUser(email)

      if (!response) return { error: 404 }

      let res = null

      bcrypt.compare(password, response.data.password, (err, result) => {
        if (err) throw new Error(err.message)

        if (!result) {
          res = { error: 401 }
        }

        res = response.data
      })

      console.log(res)

      return res
    } catch (error) {
      console.log(error)

      throw new Error(error)
    }
  }

  const response = await compareHash(password)

  return response
}

const Login = async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case 'POST':
      try {
        const response = await verifyUser(req.body)
        // console.log(response)

        return res.status(200).json({ status: 'success' })
      } catch (error) {
        console.log(error)

        throw new Error('Erro interno')
      }

    default:
      throw new Error('Evento não tratado')
  }
}

export default Login
