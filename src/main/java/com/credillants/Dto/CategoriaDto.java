package com.credillants.Dto;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@Data
@AllArgsConstructor
@NoArgsConstructor
public class CategoriaDto {
	private Integer idCategoria;
	private String nombreCategoria;
	//@Builder.Default
	//@JsonIgnore
	//private Set<ProductosEntity> productos = new LinkedHashSet<>();
}
