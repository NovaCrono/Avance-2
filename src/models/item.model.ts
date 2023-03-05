import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Producto} from './producto.model';

@model({settings: {strict: false}})
export class Item extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  detalle: string;

  @belongsTo(() => Producto, {name: 'Producto_del_Item'})
  producto_id: string;
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Item>) {
    super(data);
  }
}

export interface ItemRelations {
  // describe navigational properties here
}

export type ItemWithRelations = Item & ItemRelations;
