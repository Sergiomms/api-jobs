import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import QrCode from 'App/Models/QrCode'

export default class QrCodeController {

  public async index({ params }:  HttpContextContract) {

    const qrCode = await QrCode.query()
    .from('qr_codes')
    .where('id', params.neno)
    return qrCode
  };

  public async create({ request }: HttpContextContract) {
    const data = request.only(["qr_code_number", "is_award", "award_already_given"])

    const qrCode = await QrCode.create({
      qr_code_number: data.qr_code_number,
      is_award: data.is_award,
      award_already_given: data.award_already_given
    })

    return qrCode.toJSON()
  }
}