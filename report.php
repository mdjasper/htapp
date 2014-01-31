<? include_once("header.php"); ?>

<table class="report">
	<tr>
		<td class="report--check">
			<input type="checkbox" >
		</td>
		<td>
			<span class="report--name">{{family-name}}</span>
		</td>
		<td>
			<select class="report--result">
				<option>{{option}}</option>
			</select>
		</td>
	</tr>
	<tr>
		<td colspan="3">
			<textarea class="report--comments"></textarea>
		</td>
	</tr>
</table>

<? include_once("footer.php"); ?>