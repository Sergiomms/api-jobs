import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class QrCode extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public qr_code_number: number

  @column()
  public is_award: boolean

  @column()
  public award_already_given: boolean

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
