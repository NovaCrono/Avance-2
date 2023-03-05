import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {UnibookDataSource} from '../datasources';
import {Item, ItemRelations, Producto} from '../models';
import {ProductoRepository} from './producto.repository';

export class ItemRepository extends DefaultCrudRepository<
  Item,
  typeof Item.prototype.id,
  ItemRelations
> {

  public readonly Producto_del_Item: BelongsToAccessor<Producto, typeof Item.prototype.id>;

  constructor(
    @inject('datasources.unibook') dataSource: UnibookDataSource, @repository.getter('ProductoRepository') protected productoRepositoryGetter: Getter<ProductoRepository>,
  ) {
    super(Item, dataSource);
    this.Producto_del_Item = this.createBelongsToAccessorFor('Producto_del_Item', productoRepositoryGetter,);
    this.registerInclusionResolver('Producto_del_Item', this.Producto_del_Item.inclusionResolver);
  }
}
