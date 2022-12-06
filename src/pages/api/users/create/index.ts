import { faunadb } from '../../../../services/fauna'
import { query as q } from 'faunadb'
import { NextApiRequest, NextApiResponse } from 'next'
import bcrypt from 'bcrypt'
import { v4 as uuid } from 'uuid'

interface CreateUserProps {
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

async function createUser({ email, name, password }: CreateUserProps) {
  async function saveUser({ email, name, password, token }: SaveUserProps) {
    await faunadb.query(
      q.Create(q.Collection('users'), {
        data: {
          name,
          email,
          password,
          token,
          status: false
        }
      })
    )
  }

  async function sendEmail(token: string, email: string) {
    console.log({ token, email })
    return
  }

  function createHash({ email, name, password }: CreateUserProps) {
    const token = uuid()

    bcrypt.hash(password, 10, async (err, hash) => {
      await sendEmail(token, email)

      await saveUser({ email, name, password: hash, token })
    })
  }

  createHash({ email, name, password })
}

const CreateUsers = async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case 'POST':
      try {
        await createUser(req.body)

        return res.status(200).json({ status: 'success' })
      } catch (error) {
        console.log(error)

        throw new Error('Erro interno')
      }

    default:
      throw new Error('Evento não tratado')
  }
}

export default CreateUsers
